
import React from 'react'

const size = 32

const sx = {
  root: {
    fill: 'currentcolor',
    overflow: 'visible'
  },
  stroke: {
    fill: 'none',
    stroke: 'currentcolor',
    vectorEffect: 'non-scaling-stroke',
    opacity: .75
  }
}

const Matrix = ({ scene = 0, level = 0 }) => {
  return (
    <svg viewBox='0 0 32 32'
      style={sx.root}
      width={size}
      height={size}>
      <rect style={sx.stroke}
        width={32}
        height={32} />
      <g id='lines'>
        <path style={sx.stroke} d='M8 0 V32' />
        <path style={sx.stroke} d='M16 0 V32' />
        <path style={sx.stroke} d='M24 0 V32' />
        <path style={sx.stroke} d='M0 8 H32' />
        <path style={sx.stroke} d='M0 16 H32' />
        <path style={sx.stroke} d='M0 24 H32' />
      </g>
      <rect
        x={level * 8}
        y={scene * 8}
        width={8}
        height={8} />
    </svg>
  )
}

export default Matrix

