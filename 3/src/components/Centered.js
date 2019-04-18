
import React from 'react'

const sx = {
  root: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '90vh'
  }
}

const Centered = ({ children, style, ...props }) => {
  return (
    <div style={sx.root}>
      <div {...props} style={style}>
        {children}
      </div>
    </div>
  )
}

export default Centered

