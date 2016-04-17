
import React from 'react'

const BgLeft = ({ color, ...props }) => {
  const sx = {
    color,
    // opacity: .75,
    mixBlendMode: 'screen',
    fill: 'currentcolor',
    // transition: 'color .2s ease-in-out'
  }
  return (
    <rect
      {...props}
      style={sx}
      x='-2048'
      y='-2048'
      width='2048'
      height='4096' />
  )
}
BgLeft.defaultProps = {
  color: 'black'
}

export default BgLeft

