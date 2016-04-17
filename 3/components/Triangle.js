
import React from 'react'
import {
  d,
  M,
  L,
  Z
} from './path-constants'

const x = 32
const opp = Math.sqrt(0.75) * x
const offset = (x - opp) / 2

const path = d(
  M, 0, -x + offset,
  L, x, opp / 2 + offset,
  L, -x, opp / 2 + offset,
  Z
)

const sx = {
  path: {
    fill: 'none',
    stroke: 'currentcolor',
    strokeWidth: 2,
  }
}

const Triangle = ({ active, mode, className, ...props }) => {
  if (!active) {
    return <g />
  }

  const sxg = {
    color: (mode === 'cyber') ? '#f00' : 'cyan'
  }

  return (
    <g style={sxg}
      className={className}>
      <path {...props}
        style={sx.path}
        d={path} />
    </g>
  )
}

export default Triangle

