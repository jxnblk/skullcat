
import React from 'react'
import SkullRight from './SkullRight'

const SkullRightMagenta = ({ active, ...props }) => {
  const sx = {
    display: active ? null : 'none',
    color: 'magenta',
    opacity: .75
  }

  return <SkullRight style={sx} />
}

export default SkullRightMagenta

