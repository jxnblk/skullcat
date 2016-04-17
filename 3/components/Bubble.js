
import React from 'react'

const sx = {
  fill: 'none',
  stroke: 'currentColor',
  // strokeWidth: 2,
  transformOrigin: '50% 50%'
}

const Bubble = ({ active, x, y, ...props }) => {
  if (!active) {
    return <g />
  }

  return (
    <circle
      style={sx}
      className='vhs-pop vhs-duration-3'
      cx={x}
      cy={y}
      r={8} />
  )
}

export default Bubble

