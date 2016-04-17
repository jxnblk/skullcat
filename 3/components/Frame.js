
import React from 'react'

const Frame = ({
  transitionDuration,
  rotate,
  rotateX,
  rotateY,
  translateZ,
  scale,
  year,
  children,
  ...props
}) => {
  const transform = (year === 1984) ?
    `translate3d(${rotateX * 2}px, ${rotateY * 2}px, ${translateZ}px)` :
    `translate3d(0, 0, ${translateZ}px)
    scale(${scale})
    rotateZ(${rotate}deg)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)`

  const sx = {
    root: {
      perspective: '100vw',
      backgroundColor: 'black',
      overflow: 'hidden',
    },
    inner: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      height: '100vh',
      transitionProperty: 'transform',
      transitionTimingFunction: 'ease-in-out',
      transitionDuration: '.05s',
      transformStyle: 'preserve-3d',
      transform
    },
    center: {
      position: 'relative',
      marginBottom: '10vh',
      width: '100%'
    }
  }

  return (
    <div style={sx.root}>
      <div style={sx.inner}>
        <div style={sx.center}>
          {children}
        </div>
      </div>
    </div>
  )
}

Frame.defaultProps = {
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  translateZ: 0,
  scale: 1,
}

export default Frame

