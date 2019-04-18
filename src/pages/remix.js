import React, {
  useEffect,
} from 'react'
import { Global } from '@emotion/core'
import {
  Provider,
  PlayPause,
  Sampler,
  Debug,
  useAudio,
} from 'use-beats'
import { loops } from '../loops'

const synths = Object.keys(loops).filter(name => !/^drums/.test(name))
const drums = Object.keys(loops).filter(name => /^drums/.test(name))

const types = {
  drums,
  synths
}

const offsets = [
  0, 2, 4, 6, 8, 10, 12, 14, 16,
  18, 20, 22, 24, 26, 28, 30, 32
]
const lengths = [
  4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64,
]
const pitches = [
  3/4, 7/8, 1, 5/4, 3/2,
]

const config = {
  tempo: 160,
  loop: 32,
  tracks: {
    drums: {
      sample: drums[4],
      muted: false,
      start: 14,
      length: 32,
      pitch: 1,
      volume: 2/4,
    },
    a: {
      sample: synths[6],
      muted: false,
      start: 16,
      length: 24,
      pitch: 1,
      volume: 2/4,
    },
    b: {
      sample: synths[7],
      muted: false,
      start: 6,
      length: 32,
      pitch: 3/4,
      volume: 2/4,
    },
  },
}

const Keyboard = props => {
  const state = useAudio()
  useEffect(() => {
    const handler = e => {
      const { key, metaKey, shiftKey, ctrlKey } = e
      if (metaKey || shiftKey || ctrlKey) return
      switch (key) {
        case ' ':
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

const Column = props =>
  <div
    {...props}
    css={{
      width: '25%',
      paddingLeft: 16,
      paddingRight: 16,
    }}
  />

const Select = ({
  name,
  value,
  options,
  onChange,
}) =>
  <Column>
    <label htmlFor={name}
      css={{
        display: 'block',
      }}>
      {name}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={e => {
        onChange(e.target.value)
      }}>
      {options.map(option => (
        <option key={option}>{option}</option>
      ))}
    </select>
  </Column>

const Track = ({
  name,
  type,
}) => {
  const state = useAudio()
  const { sample, ...track } = state.tracks[name]
  const src = loops[sample]
  return (
    <>
      <Sampler
        src={src}
        steps={[0]}
        {...track}
        repeat={track.length}
      />
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          padding: 32,
        }}>
        <Column>
          <button
            onClick={e => {
              state.setState({
                tracks: {
                  [name]: {
                    muted: !track.muted
                  }
                }
              })
            }}>
            {track.muted ? 'Unmute' : 'Mute'}
          </button>
        </Column>
        <Select
          name='sample'
          value={sample}
          onChange={val => {
            state.setState({
              tracks: {
                [name]: {
                  sample: val
                }
              }
            })
          }}
          options={types[type]}
        />
        <Select
          name='start'
          value={track.start}
          options={offsets}
          onChange={value => {
            state.setState({
              tracks: {
                [name]: {
                  start: parseInt(value)
                }
              }
            })
          }}
        />
        <Select
          name='length'
          value={track.length}
          options={lengths}
          onChange={value => {
            state.setState({
              tracks: {
                [name]: {
                  length: parseInt(value)
                }
              }
            })
          }}
        />
        <Select
          name='pitch'
          value={track.pitch}
          options={pitches}
          onChange={value => {
            state.setState({
              tracks: {
                [name]: {
                  pitch: parseFloat(value)
                }
              }
            })
          }}
        />
      </div>
    </>
  )
}

const Clock = props => {
  const state = useAudio()
  return (
    <pre>{state.step}</pre>
  )
}

export default props =>
  <div
    css={{
      fontFamily: 'system-ui, sans-serif',
      color: 'white',
      backgroundColor: 'black',
    }}>
    <Global
      styles={{
        '*': {
          boxSizing: 'border-box',
        },
        body: {
          margin: 0,
          color: 'white',
          backgroundColor: 'black',
        }
      }}
    />
    <Provider initialState={config}>
      <Keyboard />
      <div
        css={{
          padding: 32,
        }}>
        <PlayPause />
        <Clock />
      </div>
      <Track name='drums' type='drums' />
      <Track name='a' type='synths' />
      <Track name='b' type='synths' />
    </Provider>
  </div>
