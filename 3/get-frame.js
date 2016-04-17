
import bumpkit from './bumpkit'
import frames from './frames'
import scenes from './scenes'

let previousFrame = {}
let unsets = []

const randomInt = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const bool = [ true ]

const colors = {
  1984: [
    'transparent',
    'transparent',
    'transparent',
    'transparent',
    'transparent',
    'transparent',
    'transparent',
    'transparent',
    'red',
    'blue',
    'green',
    'yellow',
    'lime',
    'aqua',
    'fuchsia',
  ],
  2016: [
    'transparent',
    'transparent',
    'transparent',
    'transparent',
    'transparent',
    'transparent',
    'transparent',
    '#222',
    '#333',
    '#666',
    '#777',
    '#888',
    '#999',
    '#ccc',
    '#eee',
    'cyan',
    'cyan',
    'cyan',
    'cyan',
    // 'yellow',
    'magenta',
  ],
  2048: [
    'transparent',
    '#f00',
    '#e10',
    '#d10',
    '#b10',
    '#910',
    '#710',
    '#610',
    '#410',
    '#300',
    '#100',
  ],
}

const yValues = [
  -32,
  -16,
  -8,
  0,
  0,
  8,
  16,
  32
]

const xValues = [
  0,
  0,
  8,
  16,
  32
]

const bubCoords = [
  -320,
  -288,
  -256,
  -224,
  -192,
  -160,
  -128,
  128,
  160,
  192,
  224,
  256,
  288,
  320,
].map((n, i) => ({ x: n, y: (i % 2 ? -1 : 1) * randomInt(192, 128) }))

const zoom = [
  -128,
  -64,
  0,
  64,
  128,
  256,
]

const angles = [
  -90,
  -60,
  -45,
  -30,
  -15,
  -15,
  -15,
  -5,
  0,
  0,
  0,
  0,
  5,
  15,
  15,
  15,
  30,
  45,
  60,
  90
]
const angles3d = [
  -30,
  -15,
  -15,
  -15,
  -5,
  0,
  5,
  15,
  15,
  15,
  30,
]

const props = {
  rotate: angles,
  rotateX: angles3d,
  rotateY: angles3d,
  translateZ: zoom,
  skullLeftX: xValues.map(n => n * -1),
  skullLeftY: yValues,
  skullRightX: xValues,
  skullRightY: yValues,
  bit: bool,
  leftCircle: bool,
  rightCircle: bool,
  leftTriangle: bool,
  rightTriangle: bool,
  leftX: bool,
  rightX: bool,
  leftCursor: bool,
  rightCursor: bool,
  bgLeft: colors,
  bgRight: colors,
  ring: bool,
  tachyons: bool,
  bubbleA: bubCoords,
  bubbleB: bubCoords,
  bubbleC: bubCoords,
}

const variations2016 = [
  'rotate',
  'rotate',
  'rotate',
  'rotateX',
  'rotateY',
  'skullLeftX',
  'skullLeftY',
  'skullRightX',
  'skullRightY',
  'leftCircle',
  'leftCircle',
  'leftTriangle',
  'leftTriangle',
  'rightTriangle',
  'rightTriangle',
  'leftX',
  'rightX',
  'rightX',
  'leftCursor',
  'rightCursor',
  'bgLeft',
  'bgRight',
  'bgRight',
  'ring',
  'ring',
  'tachyons',
  'tachyons',
  'bubbleA',
  'bubbleA',
  'bubbleB',
  'bubbleB',
  'bubbleC',
  'bubbleC',
]

const variations = {
  1984: [
    'rotate',
    'rotate',
    'rotate',
    'rotateX',
    'rotateY',
    'leftX',
    'rightX',
    'leftCursor',
    'rightCursor',
    'bgLeft',
    'bgLeft',
    'bgLeft',
    'bgRight',
    'bgRight',
    'bgRight',
    'tachyons',
    'tachyons',
    'bubbleA',
    'bubbleA',
    'bubbleB',
    'bubbleB',
    'bubbleC',
    'bubbleC',
  ],
  2016: variations2016,
  2048: variations2016
}

const shortProps = {
  skullLeftX: 8,
  skullLeftY: 16,
  skullRightX: 8,
  skullRightY: 16,
  bit: 8,
  leftCircle: 8,
  rightCircle: 8,
  leftTriangle: 8,
  rightTriangle: 8,
  leftX: 8,
  rightX: 8,
  leftCursor: 8,
  rightCursor: 8,
  bgLeft: 16,
  bgRight: 16,
  ring: 64,
  tachyons: 64,
  bubbleA: 8,
  bubbleB: 8,
  bubbleC: 8,
}

const getVariationKey = (year) => {
  const i = randomInt(variations[year].length - 1)
  const key = variations[year][i]
  return key
}

const getPropValue = (key, year = 2016) => {
  const values = props[key][year] || props[key] || []
  const i = randomInt(values.length - 1)
  return values[i]
}

const getFrame = ({
  step = 0,
  year = 2016,
  scene = 0,
  level = 0,
  intro
}) => {

  let frame = previousFrame || {}

  const key = intro ? 'intro' : `${scenes[scene]}${level}`
  const f = frames[key] ? frames[key][step] || {} : frames.def[step] || {}

  // unset props
  if (unsets[step]) {
    unsets[step].forEach(prop => {
      frame[prop] = frames.reset[prop] || 0
    })
    unsets[step] = []
  }

  for (var i = 0; i < f.variation || 0; i++) {
    const k = getVariationKey(year)
    const val = getPropValue(k, year)
    // add to unsets
    if (shortProps[k]) {
      // Hard-coded loop length
      const n = (step + shortProps[k]) % bumpkit.state.loop
      unsets[n] = unsets[n] || []
      unsets[n].push(k)
    }
    frame[k] = val
  }

  if (f.kick) {
    frame.translateZ = f.kick * 128
  } else {
    frame.translateZ = 0
  }

  previousFrame = frame
  return frame
}

export const resetFrame = () => {
  previousFrame = frames.reset
}

export default getFrame

