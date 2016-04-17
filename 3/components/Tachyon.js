
import React from 'react'
import {
  d,
  M,
  H,
  V
} from './path-constants'

const path = d(M, 0, -2, V, 2, M, -2, 0, H, 2)

const sx = {
  fill: 'none',
  stroke: 'currentcolor'
}

const Tachyon = (props) => (
  <path {...props} style={sx} d={path} />
)

export default Tachyon

