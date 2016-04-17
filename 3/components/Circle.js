
import React from 'react'
import {
  d,
  M,
  A
} from './path-constants'

const Circle = ({ size: x, active, color, ...props }) => {
  const style = {
    g: {
      color: 'red',
      opacity: .5,
      // transition: 'color .2s linear',
      // display: active ? null : 'none',
      transformOrigin: '50% 50%'
    },
    path: {
      fill: 'none',
      stroke: 'currentcolor',
      strokeWidth: 2,
    }
  }

  const path = d(
    M, 0, -x,
    A, x, x, 0, 0, 0, 0, x,
    A, x, x, 0, 0, 0, 0, -x
  )

  if (!active) {
    return <g />
  }

  return (
    <g style={style.g}
      className='vhs-pop vhs-duration-1'>
      <path {...props}
        style={style.path}
        d={path} />
    </g>
  )
}

Circle.defaultProps = {
  size: 32
}

export default Circle

