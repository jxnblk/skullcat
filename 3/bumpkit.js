
import Bumpkit from 'bumpkit'
import scenes from './scenes'

const config = {
  tempo: 160,
  loop: 256
}

const DOMAIN = 'http://jxnblk.s3.amazonaws.com/skullcat/3d/'

const bumpkit = new Bumpkit(config)

bumpkit.setState({
  loading: true,
  intro: true
})

export const tracks = {
  'intro': {
    uri: 'intro.mp3',
    bpm: 160,
    loop: 128
  },
  'A0': {
    uri: '1984_A0.mp3',
    bpm: 160,
    loop: 128
  },
  'A1': {
    uri: '1984_A1.mp3',
    bpm: 160,
    loop: 128
  },
  'A2': {
    uri: '1984_A2.mp3',
    bpm: 160,
    loop: 128
  },
  'A3': {
    uri: '1984_A3.mp3',
    bpm: 160,
    loop: 128
  },
  'B0': {
    uri: '2016_B0.mp3',
    bpm: 160,
    loop: 128
  },
  'B1': {
    uri: '2016_B1.mp3',
    bpm: 160,
    loop: 128
  },
  'B2': {
    uri: '2016_B2.mp3',
    bpm: 160,
    loop: 128
  },
  'B3': {
    uri: '2016_B3.mp3',
    bpm: 160,
    loop: 128
  },
  'C0': {
    uri: '2016_C0.mp3',
    bpm: 160,
    loop: 128
  },
  'C1': {
    uri: '2016_C1.mp3',
    bpm: 160,
    loop: 128
  },
  'C2': {
    uri: '2016_C2.mp3',
    bpm: 160,
    loop: 128
  },
  'C3': {
    uri: '2016_C3.mp3',
    bpm: 160,
    loop: 128
  },
  'D0': {
    uri: '2048_D0.mp3',
    bpm: 160,
    loop: 128
  },
  'D1': {
    uri: '2048_D1.mp3',
    bpm: 160,
    loop: 128
  },
  'D2': {
    uri: '2048_D2.mp3',
    bpm: 160,
    loop: 128
  },
  'D3': {
    uri: '2048_D3.mp3',
    bpm: 160,
    loop: 128
  }
}

export const clips = {
  '88mph': {
    uri: '88mph.mp3'
  },
  'fries': {
    uri: 'fries-your-brain.mp3'
  },
  'talk': {
    uri: 'i-dont-wanna-talk.mp3'
  },
  'box': {
    uri: 'the-box.mp3'
  },
  'see': {
    uri: 'i-see.mp3'
  },
  'heavy': {
    uri: 'heavy.mp3'
  },
  'unit': {
    uri: 'unit-of-measure.mp3'
  },
  'power-up': {
    uri: 'power-up.mp3'
  },
  '4d3d3d3': {
    uri: '4d3d3d3.mp3'
  },
  'beta': {
    uri: 'beta.mp3'
  },
}

let loadedCount = 0

const handleLoad = (r) => {
  loadedCount++
  let { loading } = bumpkit.state
  if (typeof loading === 'boolean') {
    loading = '\n' + 'init tachyonic_EPROM.xh --y=1984\n' +
      'OK\n' +
      'cat ' + Object.keys(tracks).join(' ') + ' > flux.cap\n' +
      'Loading 4D coordinates...\n'
  }
  const l = Object.keys(tracks).length + Object.keys(clips).length
  const p = Math.floor(loadedCount / l * 100)
  loading += `\n${p}%`
  bumpkit.setState({ loading })
  if (loadedCount >= l) {
    console.error('TIME CIRCUIT MISMATCH')
    setTimeout(() => {
      bumpkit.setState({ loading: false })
    }, 500)
  }
}

const handleLoadErr = (err) => {
  console.error(':(')
  bumpkit.setState({ sadface: true })
}

const createLooper = (track) => {
  track.active = false
  track.looper = new Bumpkit.Looper(bumpkit, track)
  track.looper.load(DOMAIN + track.uri)
    .then(handleLoad)
    .catch(handleLoadErr)
}

const createSampler = (clip) => {
  clip.sampler = new Bumpkit.Sampler(bumpkit.context, clip)
  clip.sampler.load(DOMAIN + clip.uri)
    .then(handleLoad)
    .catch(handleLoadErr)
}

Object.keys(tracks).map(key => {
  const track = tracks[key]
  createLooper(track)
})

Object.keys(clips).map(key => {
  const clip = clips[key]
  createSampler(clip)
})

clips.glory = {
  uri: 'glory.mp3'
}
createSampler(clips.glory)

export const setScene = ({ year, scene, level }) => {

  // To do: handle level
  Object.keys(tracks).forEach((key) => {
    const track = tracks[key]
    if (key === `${scenes[scene]}${level}`) {
      track.looper.active = true
    } else {
      track.looper.active = false
    }
  })
}

tracks.intro.looper.active = true

export default bumpkit

