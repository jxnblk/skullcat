// from v3
export const url = 'http://jxnblk.s3.amazonaws.com/skullcat/3d/'

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


const bucket = 'http://jxnblk.s3.amazonaws.com/stepkit/'

export const x808 = [
  // '808/cowbell.mp3',
  // for some reason s3 hates this file
  '808/kick.mp3',
  '808/clap.mp3',
  '808/hihat.mp3',
  '808/clave.mp3',
].map(f => bucket + f)

export const x909 = [
  '909/kick.mp3',
  '909/snare.mp3',
  '909/hihat.mp3',
  '909/tom-low.mp3',
].map(f => bucket + f)

export const bedford = [
  'bedford/kick.mp3',
  'bedford/rim.mp3',
  'bedford/hat.mp3',
  'bedford/snare.mp3',
  // 'bedford/stab01.mp3',
  // 'bedford/stab02.mp3',
  // 'bedford/stab03.mp3',
].map(f => bucket + f)

export const everything = [
  'everything/kick.mp3',
  'everything/snare.mp3',
  'everything/hat.mp3',
  'everything/vocal-4.mp3',
].map(f => bucket + f)


