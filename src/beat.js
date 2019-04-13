import React, {
  useReducer,
  useContext,
  useEffect,
} from 'react'
import { url, tracks, clips } from './data'

import {
  useSequencer,
  useSampler,
} from '../skullbeats'

const samples = {
  a: url + tracks.A0.uri,
  b: url + tracks.B0.uri,
  c: url + tracks.B1.uri,
}

export const wrapper = props => {
  const [ state, setState ] = useSequencer({
    tempo: 160,
    loop: 32,
  }, [ ])
  const sampler = useSampler(state, samples.c)

  if (state.playing && state.step === 0) {
    sampler.play(state.time, { length: 32 })
  }

  return (
    <>
      <pre children={JSON.stringify(state, null, 2)} />
      <button onClick={e => setState({ playing: !state.playing })}>
        {state.playing ? 'Pause' : 'Play'}
      </button>
      <input
        readOnly
        name='tempo'
        type='number'
        value={state.tempo}
        onChange={e => {
          setState({
            tempo: Number(e.target.value)
          })
        }}
      />
      {props.children}
    </>
  )
}

