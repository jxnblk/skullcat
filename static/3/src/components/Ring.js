
import React from 'react'
import {
  M,
  L,
  d
} from './path-constants'

const length = 60
const path = d(M, 0, -256, L, 0, -248)

const ticks = Array.from({ length }, (a, b) => b)
  .map((n) => {
    const angle = 360 / length * n
    return { angle }
  })
  .map(({ angle }) => {
    const strokeWidth = angle % (360 / length * 5) === 0 ? 4 : 1
    const transform = `rotate(${angle})`

    return (
      <path
        key={angle}
        strokeWidth={strokeWidth}
        transform={transform}
        d={path} />
    )
  })

const sx = {
  root: {},
  inner: {
    fill: 'none',
    stroke: 'currentcolor',
    opacity: .5,
    strokeWidth: 1
  }
}

const Ring = ({ active, ...props }) => {
  if (!active) {
    return <g />
  }

  return (
    <g style={sx.root} className='vhs-blur vhs-duration-4'>
      <g style={sx.inner} className='an-spin'>
        {ticks}
      </g>
    </g>
  )
}

export default Ring

