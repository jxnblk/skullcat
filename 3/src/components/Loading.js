
import React from 'react'

export const BlockCursor = () => {
  return (
    <div>
      <pre style={{ margin: 0 }}>
        {'> '}
        <span className='vhs-flash vhs-duration-4'>{'█'}</span>
      </pre>
    </div>
  )
}

const Loading = ({ loading }) => {
  const sx = {
    root: {
      fontSize: 14,
      color: 'lime'
    },
    pre: {
      fontFamily: 'inherit'
    }
  }

  return (
    <div style={sx.root}>
      <pre style={sx.pre}>MEOW x256{loading}</pre>
      <BlockCursor />
    </div>
  )
}

export default Loading

