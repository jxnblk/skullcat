import React, {
  useReducer,
  useContext,
} from 'react'
import {
  Song,
  Sequencer,
  Sampler,
  Synth,
} from 'react-music'
import merge from 'lodash.merge'
import { url, tracks, clips } from './data'

const useState = (init) => useReducer((state, next) =>
  merge({}, state, next),
  init
)

export const wrapper = props => {
  const [ state, setState ] = useState({
    playing: false,
    tempo: 128,
  })

  return (
    <>
      <pre children={JSON.stringify(state, null, 2)} />
      <button onClick={e => setState({ playing: !state.playing })}>
        {state.playing ? 'Pause' : 'Play'}
      </button>
      <Song
        playing={state.playing}
        tempo={state.tempo}>
        <Sequencer bars={1}>
          <Sampler
            sample={url + tracks.A0.uri}
            steps={[0]}
          />
          <Synth
            type="square"
            steps={[
              [0, 2, "c3"],
              [8, 2, ["c3", "d#3", "f4"]]
            ]}
          />

          {props.children}
        </Sequencer>
      </Song>
    </>
  )
}
