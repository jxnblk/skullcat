
import React from 'react'
import G from './G'
import SkullCat from './SkullCat'

const HalfSkull = ({
  clip,
  x,
  y,
  transitionDuration,
  style,
  ...props
}) => {
  const transform = `translate(${x}px, ${y}px)`
  const sx = {
    ...style,
    transform,
    transitionProperty: 'transform',
    transitionTimingFunction: 'ease-in-out',
    transitionDuration,
  }

  return (
    <G {...props}
      style={sx}
      clip={clip}>
      <SkullCat />
    </G>
  )
}

export default HalfSkull

