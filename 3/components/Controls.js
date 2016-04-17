
import React from 'react'
import {
  Block,
  Space,
  Slider
} from 'rebass'
import Icon from 'react-geomicons'
import fullscreen from '../util/fullscreen'
import Btn from './Btn'
import Matrix from './Matrix'

class Controls extends React.Component {
  shouldComponentUpdate ({ intro, playing, scene, level }) {
    return intro !== this.props.intro ||
      playing !== this.props.playing ||
      scene !== this.props.scene ||
      level !== this.props.level
  }

  render () {
    const {
      intro,
      playing,
      playPause,
      flip,
      scene,
      level,
    } = this.props

    return (
      <div>
        <div className='fixed b0 l0 p2'>
          <div className='flex'>
            <Btn
              onClick={playPause}>
              <Icon name={playing ? 'pause' : 'play'} />
            </Btn>
            <Btn
              children='F'
              onClick={fullscreen} />
          </div>
        </div>
        {!intro && playing && (
          <div className='fixed b0 r0 p2'>
            <div className='flex vhs-bottom vhs-duration-2'>
              <Matrix
                scene={scene}
                level={level}
                onClick={fullscreen} />
              <Space x={1} />
              <Btn onClick={flip('left')} children='H' />
              <Btn onClick={flip('down')} children='J' />
              <Btn onClick={flip('up')} children='K' />
              <Btn onClick={flip('right')} children='L' />
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Controls

