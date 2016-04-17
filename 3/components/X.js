
import React from 'react'
import {
  d,
  M,
  L
} from './path-constants'

const X = ({ size: x, active, ...props }) => {
  const style = {
    g: {
      // display: active ? 'block' : 'none',
      transformOrigin: '50% 50%'
    },
    path: {
      color: '#f60',
      opacity: .75,
      fill: 'none',
      stroke: 'currentcolor',
      strokeWidth: 2,
    }
  }

  const path = d(
    M, -x, -x,
    L, x, x,
    M, x, -x,
    L, -x, x
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

X.defaultProps = {
  size: 32
}

export default X

