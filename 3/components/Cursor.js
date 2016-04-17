
import React from 'react'

const Cursor = ({ active, ...props }) => {
  if (!active) {
    return <g />
  }

  return (
    <rect
      className='vhs-flash vhs-duration-3'
      {...props}
      x={-4}
      y={6}
      width={8}
      height={16} />
  )
}

export default Cursor

