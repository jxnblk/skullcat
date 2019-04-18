
import React from 'react'
import getFrame from '../get-frame'
import Frame from './Frame'
import Svg from './Svg'

import BgLeft from './BgLeft'
import BgRight from './BgRight'
import SkullLeft from './SkullLeft'
import SkullRight from './SkullRight'

import SkullRightMagenta from './SkullRightMagenta'

import BitSkull from './BitSkull'
import Tachyons from './Tachyons'
import Cursor from './Cursor'

import X from './X'
import Circle from './Circle'
import Triangle from './Triangle'
import Ring from './Ring'

import Bubble from './Bubble'

const directions = {
  up: {
    transform: 'translateY(100vh)',
    top: '-100vh',
  },
  down: {
    transform: 'translateY(-100vh)',
    top: '100vh',
  },
  left: {
    transform: 'translateX(100vw)',
    left: '-100vw',
  },
  right: {
    transform: 'translateX(-100vw)',
    left: '100vw',
  },
}

class Stage extends React.Component {
  shouldComponentUpdate (nextProps) {
    return nextProps.step !== this.props.step
  }

  render () {
    const { props } = this
    const {
      transitionDuration,
      step,
      scene,
      level,
      flip,
      year,
      mode,
      intro
    } = props

    const f = getFrame({
      step,
      scene,
      level,
      year,
      intro
    })

    const {
      rotate,
      rotateX = 0,
      rotateY = 0,
      translateZ,
      scale,
      skullLeftX,
      skullLeftY,
      skullRightX,
      skullRightY,
      bit,
      leftCircle,
      rightCircle,
      leftTriangle,
      rightTriangle,
      leftX,
      rightX,
      leftCursor,
      rightCursor,
      bgLeft,
      bgRight,
      ring,
      tachyons,
      bubbleA = {},
      bubbleB = {},
      bubbleC = {},
    } = f

    const direction = directions[flip] || directions.up
    const sx = {
      root: {
        overflow: 'hidden',
        height: '100vh',
        color: (mode === 'cyber') ? '#f00' : null
      },
      inner: {
        transform: flip ? direction.transform : 'translateY(0)',
        transition: flip ? 'transform .2s ease-out' : null
      },
      ghost: {
        position: 'absolute',
        backgroundColor: 'yellow',
        width: '100vw',
        height: '100vh',
        top: direction.top || 0,
        left: direction.left || 0,
      },
      layer1: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        transform: 'translateZ(-64px)',
        width: '100%',
        maxHeight: 'none',
        overflow: 'visible',
        fill: 'currentcolor',
      },
      layer2: {
        position: 'relative',
        zIndex: 1,
        width: '100%',
        maxHeight: 'none',
        overflow: 'visible',
        fill: 'currentcolor',
      },
      layer3: {
        position: 'absolute',
        zIndex: 2,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        transform: 'translateZ(64px)',
        width: '100%',
        maxHeight: 'none',
        overflow: 'visible',
        fill: 'currentcolor',
      }
    }

    const viewBox = '-512 -512 1024 1024'

    const frameProps = {
      transitionDuration,
      rotate,
      rotateX,
      rotateY,
      translateZ,
      scale,
      year
    }

    const frame = (
      <Frame {...frameProps}>
        <svg viewBox={viewBox} style={sx.layer2}>
          <g>
            <BgLeft color={bgLeft} />
            <BgRight color={bgRight} />
          </g>
          {mode !== '8bit' ?
            (<g>
              <SkullLeft
                transitionDuration={transitionDuration}
                mode={mode}
                x={skullLeftX}
                y={skullLeftY} />
              <SkullRight
                mode={mode}
                transitionDuration={transitionDuration}
                x={skullRightX}
                y={skullRightY} />
            </g>) :
            (<g>
              <BitSkull active
                className='vhs-flicker'
                transform='translate(0, 32)' />
            </g>)}
        </svg>
        <svg viewBox={viewBox} style={sx.layer3}>
          <Ring active={ring} />
          <Tachyons active={tachyons} />
          <Cursor active={leftCursor}
            transform={`translate(${-256 + rotateX}, ${rotateY})`} />
          <Cursor active={rightCursor}
            transform={`translate(${256 + rotateX}, ${rotateY})`} />
          <g>
            <Circle
              active={leftCircle}
              transform='translate(-128, 32)' />
            <Circle
              active={rightCircle}
              transform='translate(128, 32)' />
          </g>
          <g>
            <Triangle
              className='vhs-right'
              mode={mode}
              active={leftTriangle}
              transform='translate(-320, 32)' />
            <Triangle
              className='vhs-left'
              mode={mode}
              active={rightTriangle}
              transform='translate(320, 32)' />
          </g>
          <g>
            <X active={leftX}
              transform='translate(-128, 32)' />
            <X active={rightX}
              transform='translate(128, 32)' />
          </g>
          <g>
            <Bubble
              active={bubbleA.x}
              x={bubbleA.x}
              y={bubbleA.y} />
            <Bubble
              active={bubbleB.x}
              x={bubbleB.x}
              y={bubbleB.y} />
            <Bubble
              active={bubbleC.x}
              x={bubbleC.x}
              y={bubbleC.y} />
          </g>
        </svg>
      </Frame>
    )

    const ghostFrame = flip ? React.cloneElement(frame) : false

    return (
      <div style={sx.root}>
        <div style={sx.inner}>
          {frame}
          <div style={sx.ghost}>
            {ghostFrame}
          </div>
          <svg width='0' height='0'>
            <defs>
              <clipPath id='skull-left'>
                <rect x='-512' y='-512' width='512' height='1024' />
              </clipPath>
              <clipPath id='skull-right'>
                <rect x='0' y='-512' width='512' height='1024' />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    )
  }
}

Stage.defaultProps = {
  transitionDuration: '.1s'
}

export default Stage

