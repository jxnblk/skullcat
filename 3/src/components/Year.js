
import React from 'react'
import { Motion, spring } from 'react-motion'
import { Progress } from 'rebass'
import bumpkit from '../bumpkit'
import Badge from './Badge'

const msx = {
  display: 'inline-block',
  textAlign: 'center',
  width: '.75em'
}
const Mono = ({text}) => (
  <span>
    {text.split('').map((l, i) => (
      <span key={i} style={msx}>{l}</span>
    ))}
  </span>
)

const sx = {
  year: {
    fontSize: 32,
    lineHeight: 1
  },
  progress: {
    height: 2
  },
  position: {
    fontSize: 12,
    marginTop: 16,
    marginBottom: 16
  },
  badge: {
    fontSize: 20
  }
}

class Year extends React.Component {
  shouldComponentUpdate ({ step, year, unlocks }) {
    return step !== this.props.step ||
      year !== this.props.year ||
      unlocks !== this.props.unlocks
  }

  render () {
    const { step, year, unlocks } = this.props

    return (
      <div className='fixed t0 r0 p2'>
        <div style={{ textAlign: 'right' }}>
          <Motion defaultStyle={{ year: 1984 }}
            style={{ year: spring(year, { precision: 1 }) }}>
            {interpolated =>
              <div style={sx.year} className='mono'>
                <Mono text={Math.floor(interpolated.year) + ''} />
              </div>
            }
          </Motion>
          <Progress
            value={step / 128}
            mt={1}
            mb={0}
            color='inherit'
            rounded={false}
            style={sx.progress} />
          <div style={sx.position}>
            <Mono text={bumpkit.position} />
          </div>
          <div>
            {unlocks.map((u, i) => (
              <div key={i}>
                <Badge children={u.badge} />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Year

