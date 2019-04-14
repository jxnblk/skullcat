import React, {
  useEffect,
  useContext,
  useReducer,
} from 'react'
import merge from 'lodash.merge'

export const Context = React.createContext({})
export const useAudio = () => useContext(Context)

export const useState = (init) => useReducer((state, next) => merge({}, state, next), init)

const config = {
  lookahead: 32,
}

const seconds = ms => ms / 250

export const useSequencer = (options = {}, args) => {
  let context

  const [ state, setState ] = useState({
    playing: false,
    tempo: 128,
    loop: 16,
    step: -1,
    time: 0,
    ...options
  })

  useEffect(() => {
    window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext
    let clock
    let next = 0
    let step = -1
    context = context || new AudioContext()
    const duration = 60 / state.tempo / 4
    next = context.currentTime

    setState({ context, duration })

    const beep = (time) => {
      if (!state.playing) return
      const osc = context.createOscillator()
      osc.connect(context.destination)
      osc.frequency.value = 256
      osc.start(time)
      osc.stop(time + 0.04)
    }

    const scheduler = () => {
      while (next < context.currentTime + seconds(config.lookahead)) {
        if (state.metronome && step % 4 === 0) beep(next)
        setState({ step, time: next })
        next += state.duration
        step++
        if (step >= state.loop) step = 0
      }
    }

    if (state.playing) {
      clock = window.setInterval(scheduler, config.lookahead)
      scheduler()
    } else {
      window.clearInterval(clock)
      setState({ step: -1 })
    }

    return () => {
      window.clearInterval(clock)
    }
  }, [ state.tempo, state.loop, state.playing, ...args])

  return [ state, setState ]
}

export const useSampler = (state, url) => {
  const { context = {} } = state
  const [ audio, setAudio ] = useState({})

  useEffect(() => {
    const getAudio = async () => {
      const res = await fetch(url, { mode: 'cors' })
      const arr = await res.arrayBuffer()
      const buffer = await context.decodeAudioData(arr)
      setAudio({ buffer })
    }
    if (!audio.buffer && context.decodeAudioData) getAudio()
  }, [ context, url ])

  const play = (time, {
    length,
    start,
    loop,
    volume,
    pitch,
  } = {}) => {
    if (!audio.buffer) return console.error('Audio not yet loaded', url)
    if (!context) return console.error('Missing audio context', url)
    if (audio.triggered) return
    try {
      // monophonic
      if (audio.source) audio.source.stop(time)
      const source = context.createBufferSource()
      let destination = context.destination
      if (volume) {
        destination = context.createGain()
        destination.gain.value = volume
        destination.connect(context.destination)
      }
      source.buffer = audio.buffer
      source.connect(destination)
      let offset
      let duration
      if (start) {
        offset = state.duration * start
      }
      if (loop) {
        source.loop = true
        if (length) source.loopEnd = state.duration * length
        if (start) source.loopStart = state.duration * start
      } else {
        if (length) duration = state.duration * length
      }
      if (pitch) source.playbackRate.value = pitch

      source.start(time, offset, duration)

      setAudio({ source, triggered: true })
      setTimeout(() => {
        setAudio({ triggered: false })
      }, state.duration * 1000)

      source.addEventListener('ended', e => {
        setAudio({ triggered: false })
      })
      return source
    } catch (e) {
      console.error(e)
    }
  }

  return { play, audio }
}

export const Provider = ({
  initialState,
  children,
}) => {
  const [ state, setState ] = useSequencer(initialState)
  const context = {
    ...state,
    setState,
  }

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  )
}

export const PlayPause = props => {
  const state = useAudio()

  return (
    <button
      {...props}
      children={props.children || state.playing ? 'Pause' : 'Play'}
      onClick={e => {
        state.setState({ playing: !state.playing })
      }}
    />
  )
}

export const Sampler = props => {
  const state = useAudio()
  const sampler = useSampler(state, props.src)

  if (!state.playing || props.muted) {
    if (sampler.audio.source) sampler.audio.source.stop(0)
    return false
  }

  if (props.steps.includes(state.step % props.repeat)) {
    sampler.play(state.time, props)
  }

  return false
}

Sampler.defaultProps = {
  steps: [],
  repeat: Infinity,
  // start
  // length
  // loop
}

export const Debug = props => {
  const state = useAudio()
  return <pre children={JSON.stringify(state, null, 2)} />
}
