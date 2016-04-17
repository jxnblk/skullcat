
import React from 'react'
import SkullCat from './SkullCat'

const SkullLeft = ({ x, y, transitionDuration, mode, ...props }) => {
  const transform = `translate(${x}px, ${y}px)`
  const sx = {
    transform,
    transitionProperty: 'transform',
    transitionTimingFunction: 'ease-in-out',
    transitionDuration,
  }

  return (
    <g {...props}
      style={sx}
      clipPath='url(#skull-left)'>
      <SkullCat mode={mode} />
    </g>
  )
}

export default SkullLeft

