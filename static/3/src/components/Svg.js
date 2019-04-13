
import React from 'react'

import {
  M,
  L,
  Z,
  d
} from './path-constants'

const sx = {
  root: {
    width: '100%',
    maxHeight: 'none',
    overflow: 'visible',
    fill: 'currentcolor'
  },
  guide: {
    fill: 'none',
    stroke: 'red',
    opacity: .5
  }
}

const size = 1024
const c = size / 2
const viewBox = `${-size / 2} ${-size / 2} ${size} ${size}`

const guidesPath = d(
  M, -c * 2, 0,
  L, c *2 , 0,
  M, 0, -c * 2,
  L, 0, c * 2
)

const Svg = ({
  guides,
  children,
  style,
  ...props
}) => {

  const rootStyle = { ...sx.root, ...style }

  return (
    <svg viewBox={viewBox}
      style={rootStyle}>
      {children}
      {guides && <path style={sx.guide} d={guidesPath} />}
    </svg>
  )
}

Svg.defaultProps = {
  guides: false
}

export default Svg

