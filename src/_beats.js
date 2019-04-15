import React, {
  useReducer,
  useContext,
  useEffect,
} from 'react'
import {
  url,
  tracks,
  clips,
  bedford,
  x808,
  everything,
} from './data'

import {
  // low-level
  useSequencer,
  useSampler,

  Provider,
  PlayPause,
  Sampler,
  useAudio,
  Debug,
} from '../index'

const samples = {
  a: url + tracks.A0.uri,
  b0: url + tracks.B0.uri,
  b1: url + tracks.B1.uri,
  d2: url + tracks.D2.uri,
  d3: url + tracks.D3.uri,
  bed: {
    kick: bedford[0],
    rim: bedford[1],
    hat: bedford[2],
    snare: bedford[3],
  },
  everything: {
    kick: everything[0],
    snare: everything[1],
    hat: everything[2],
    rim: everything[3],
  },
  skull: {
    kick: url + tracks.D0.uri,
    snare: url + tracks.D1.uri,
    hat: url + tracks.D3.uri,
    rim: url + tracks.D2.uri,
  }
}

const Beep = props => {
  const on = false
  return (
    <div
      style={{
        padding: 32,
        backgroundColor: on ? 'magenta' : 'cyan',
        transform: `scale(${on ? 2/1 : 1/2})`,
        transition: 'transform .05s ease-out',
      }}
    />
  )
}

const useKeyboard = handlers => {
  const state = useAudio()
  useEffect(() => {
    const listener = window.addEventListener('keydown', e => {
      if (e.metaKey || e.shiftKey || e.ctrlKey) return
      console.log(e.key)
      const handler = handlers[e.key]
      if (typeof handler !== 'function') return
      state.setState(handler(state))
    })
    return () => {
      window.removeEventListener('keydown', listener)
    }
  }, [ handlers])
}

const Keyboard = props => {
  useKeyboard({
    ' ': state => ({ playing: !state.playing }),
  })
  return false
}

const Drums = ({ kit }) => {
  const s = samples[kit]
  console.log(kit, s)
  return (
    <>
      <Sampler
        name='kick'
        src={s.kick}
        steps={[ 0, 6, 12, ]}
        muted
      />
      <Sampler
        muted
        name='hit'
        src={s.snare}
        steps={[ 8 ]}
        repeat={16} />
      <Sampler
        name='hat'
        src={s.hat}
        steps={[ 4, 8, 12, 16 ]}
        repeat={16}
        muted
      />
      <Sampler
        name='rim'
        volume={1}
        src={s.rim}
        steps={[ 0 ]}
        start={8}
        length={16}
        repeat={32}
        pitch={3/4}
      />
      <Sampler
        name='rim'
        volume={1}
        src={s.rim}
        steps={[ 16 ]}
        start={12}
        length={8}
        pitch={5/8}
      />
      <Sampler
        name='rim'
        volume={1}
        src={s.rim}
        steps={[ 24 ]}
        start={0}
        length={8}
        pitch={7/8}
      />
    </>
  )
}

export const wrapper = props => {
  return (
    <Provider
      initialState={{
        tempo: 160,
        loop: 32,
      }}>
      <Keyboard />
      <PlayPause />
      {/*
      <Sampler
        muted
        volume={1/8}
        src={samples.d3}
        length={32}
        start={22}
        steps={[ 0 ]}
      />
      <Beep />
      */}
      <Debug />
      <Drums kit='skull' />
      {props.children}
    </Provider>
  )
}
