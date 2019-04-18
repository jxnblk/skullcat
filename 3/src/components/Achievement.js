
import React from 'react'

const sx = {
  root: {
    position: 'relative',
    padding: 16,
    border: '1px solid currentcolor'
  },
  text: {
    fontSize: 14,
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.2em'
  },
  badge: {
    fontFamily: 'Arial Unicode MS',
  }
}

const Achievement = ({ name, badge, ...props }) => {
  return (
    <div style={sx.root}
      className='vhs-flash vhs-duration-4'>
      <div style={sx.text} className='vhs-bottom vhs-duration-4'>
        <span style={sx.badge}>{badge}</span> {name} Unlocked
      </div>
    </div>
  )
}

export default Achievement

