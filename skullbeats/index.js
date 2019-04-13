import React, {
  useEffect,
  useContext,
  useReducer,
} from 'react'
import merge from 'lodash.merge'


export const Context = React.createContext({})

export const useState = (init) => useReducer((state, next) => merge({}, state, next), init)

const config = {
  lookahead: 32,
}

const seconds = ms => ms / 250

export const useSequencer = (options = {}, args) => {
  const {
    tempo = 128,
    loop = 16,
  } = options

  const [ state, setState ] = useState({
    playing: false,
    tempo,
    loop,
    step: -1,
    time: 0,
    metronome: false,
  })

  useEffect(() => {
    window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext
    let clock
    let next = 0
    let step = -1
    const context = new AudioContext()
    const duration = 60 / state.tempo / 4
    context.createBufferSource()
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
        setState({ step, time: next })
        if (state.metronome && step % 4 === 0) beep(next)
        next += state.duration
        step++
        if (step >= loop) step = 0
      }
    }
    clock = window.setInterval(scheduler, config.lookahead)

    if (state.playing) {
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
  if (!state.context) {
    console.warn('Missing context', state, url)
  }
  const { context = {} } = state
  const [ audio, setAudio ] = useState({})

  useEffect(() => {
    const getAudio = async () => {
      // console.log('loading', url)
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
  } = {}) => {
    if (!audio.buffer) {
      console.warn('audio not loaded', audio, url)
      return
    }
    if (!context) {
      console.warn('missing audio context', url)
      return
    }
    console.log('play', url)
    try {
      if (audio.triggered) {
        return
      }
      // monophonic ??
      if (audio.source) audio.source.stop(time)
      const source = context.createBufferSource()
      source.buffer = audio.buffer
      source.connect(context.destination)
      source.start(time)

      if (length) source.stop(time + length * state.duration)

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
