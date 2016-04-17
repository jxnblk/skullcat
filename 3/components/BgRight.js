
import React from 'react'

const BgRight = ({ color, ...props }) => {
  const sx = {
    color,
    // opacity: .75,
    fill: 'currentcolor',
    // transition: 'color .2s ease-in-out'
  }
  return (
    <rect
      {...props}
      style={sx}
      x='0'
      y='-2048'
      width='2048'
      height='4096' />
  )
}

BgRight.defaultProps = {
  color: 'black'
}

export default BgRight

