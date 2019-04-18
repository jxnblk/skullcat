
import React from 'react'

const sx = {
  root: {
    display: 'inline-block',
    position: 'relative',
    textAlign: 'center',
    width: 24,
    height: 24,
    margin: 4,
  },
  bg: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'currentcolor',
    opacity: .5
  },
  text: {
    position: 'relative',
    zIndex: 1,
    color: '#000'
  }
}

const Badge = ({ children }) => (
  <div style={sx.root} className='vhs-right vhs-duration-3'>
    <div style={sx.bg} />
    <div style={sx.text} children={children} />
  </div>
)

export default Badge

