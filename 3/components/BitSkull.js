
import React from 'react'
import {
  d,
  M,
  L,
  H,
  V,
  Z
} from './path-constants'

const path = d(
  M, -8, -6,
  V, 2,
  H, -3,
  V, 5,
  L, -2, 4,
  H, 2,
  L, 3, 5,
  V, 2,
  H, 8,
  V, -6,
  Z,

  M, -7, -3,
  H, -3,
  V, 1,
  H, -7,
  Z,

  M, 3, -3,
  H, 7,
  V, 1,
  H, 3,
  Z
)

const BitSkull = ({ active, ...props }) => {
  if (!active) {
    return <g />
  }

  return (
    <path {...props} d={path} />
  )
}

export default BitSkull
