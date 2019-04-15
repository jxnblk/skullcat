import React, {
  useEffect,
} from 'react'
import { loops } from './loops'
import {
  Provider,
  PlayPause,
  Sampler,
  Debug,
  useAudio,
} from 'use-beats'

const config = {
  tempo: 160,
  loop: 32,
  samples: {
    drums: loops['drums-2016-a'],
    synth: loops['2016-d'],
  },
  muted: {
    drums: false,
    synth: false,
  },
  start: {
    drums: 8,
    synth: 32,
  },
  length: {
    drums: 32,
    synth: 32,
  },
  pitch: {
    drums: 1,
    synth: 1,
  },
}

const Keyboard = props => {
  const state = useAudio()
  useEffect(() => {
    const handler = e => {
      const { key, metaKey, shiftKey, ctrlKey } = e
      console.log('keydown', key, state)
      if (metaKey || shiftKey || ctrlKey) return
      switch (key) {
        case ' ':
          console.log('space')
          state.setState({ playing: !state.playing })
          break
      }
    }

    window.addEventListener('keydown', handler)
    return () => {
      window.removeEventListener('keydown', handler)
    }
  }, [ state.playing ])
  return false
}

const Looper = props => {
  const state = useAudio()
  const { samples, start, length, pitch, muted } = state

  return (
    <>
      <Sampler
        src={samples.drums}
        steps={[0]}
        start={start.drums}
        length={length.drums}
        pitch={pitch.drums}
        muted={muted.drums}
      />
      <Sampler
        src={samples.synth}
        steps={[0]}
        start={start.synth}
        length={length.synth}
        pitch={pitch.synth}
        muted={muted.synth}
      />
    </>
  )
}

export const App = props =>
  <Provider initialState={config}>
    <Keyboard />
    <PlayPause />
    <Debug />
    <Looper />
    {props.children}
  </Provider>
