
import React from 'react'
import {
  flatten,
  difference,
  differenceWith,
  isEqual,
  includes
} from 'lodash'
import { clips } from './bumpkit'
import scenes from './scenes'

const levels = [ 0, 1, 2, 3 ]
const all = flatten(scenes.map(s => {
  return levels.map(l => s + l)
}))

const sceneMatch = (a, b) => {
  return includes(b, a)
}

const hasScenes = (plays) => {
  return differenceWith(scenes, plays, sceneMatch).length === 0
}

const hasLevels = (plays) => {
  return differenceWith(levels, plays, sceneMatch).length === 0
}

const hasAll = (plays) => {
  return difference(all, plays).length === 0
}

const hasN = (n) => {
  const x = n * 2
  return (plays) => {
    if (plays.length < x) { return false }
    const end = plays.slice(-x)
    const a = end.slice(0, n)
    const b = end.slice(-n)
    return isEqual(a, b) //.length === 0
  }
}

const hasFour = hasN(4)
const hasSix = hasN(6)
const hasEight = hasN(8)
const hasTwelve = hasN(12)
const hasSixteen = hasN(16)

const locks = [
  {
    name: 'All scenes',
    badge: '✌',
    sample: 'fries',
    condition: hasScenes
  },
  {
    name: 'All levels',
    badge: '⬕',
    sample: 'talk',
    condition: hasLevels
  },
  {
    name: 'All loops',
    badge: '☲',
    sample: 'see',
    condition: hasAll
  },
  {
    name: '4x',
    badge: '⦰', // '\u2620', // '\u9760',
    sample: 'see',
    condition: hasFour
  },
  {
    name: '666',
    badge: '♱',
    sample: 'box',
    condition: hasSix
  },
  {
    name: '8x',
    badge: '❖',
    sample: 'heavy',
    condition: hasEight
  },
  {
    name: '12x',
    badge: '♛',
    sample: 'power-up',
    condition: hasTwelve
  },
  {
    name: '16x',
    badge: '★',
    sample: 'unit',
    condition: hasSixteen
  },
  {
    name: '4d3d3d3',
    badge: '☃',
    sample: '4d3d3d3',
    condition: (plays) => plays.length > 48
  },
  {
    name: 'beta sequence',
    badge: '✇',
    sample: 'beta',
    condition: (plays) => plays.length > 96
  },
  {
    name: 'wtf',
    badge: 'ᵊ⟿',
    sample: 'glory',
    condition: (plays) => plays.length > 512
  }
]

const getUnlocks = (plays) => {
  let l
  // console.log('plays: ', plays.length)
  locks.forEach((lock, i) => {
    if (lock.condition && lock.condition(plays)) {
      lock.sample && clips[lock.sample] && clips[lock.sample].sampler.play()
      l = lock
      locks.splice(i, 1)
      return
    }
  })
  return l || false
}

export default getUnlocks

