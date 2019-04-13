
import React from 'react'
import Perf from 'react-addons-perf'
import { Flex } from 'reflexbox'
import { Fixed } from 'rebass'
import bumpkit, { tracks, clips, setScene } from '../bumpkit'
import Keybind from '../util/Keybind'
import fullscreen from '../util/fullscreen'
import getFrame, { resetFrame } from '../get-frame'
import getUnlocks from '../get-unlocks'
import storage from '../util/storage'
import scenes from '../scenes'
import Stage from './Stage'
import Controls from './Controls'
import Year from './Year'
import Loading from './Loading'
import Achievement from './Achievement'
import Paused from './Paused'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      loading: true,
      index: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      skullLeftX: 0,
      skullLeftY: 0,
      skullRightX: 0,
      skullRightY: 0,
      year: 1984,
      scene: 0,
      level: 0,
      plays: [],
      unlocks: [],
      achievement: false
    }

    this.introListener = this.introListener.bind(this)
    this.addMatrixKeybindings = this.addMatrixKeybindings.bind(this)
    this.incrementScene = this.incrementScene.bind(this)
    this.decrementScene = this.decrementScene.bind(this)
    this.incrementLevel = this.incrementLevel.bind(this)
    this.decrementLevel = this.decrementLevel.bind(this)
    this.updateMatrix = this.updateMatrix.bind(this)
    this.flip = this.flip.bind(this)
    this.setYear = this.setYear.bind(this)
    this.addPlay = this.addPlay.bind(this)
    this.showAchievement = this.showAchievement.bind(this)
  }

  introListener ({ step }) {
    if (step >= 255) {
      const flip = this.flip.bind(this)
      bumpkit.setState({ loop: 128, intro: false })
      bumpkit.unsync(this.introListener)
      clips['88mph'].sampler.play()
      flip('down')()
      setScene(this.state)
      this.addMatrixKeybindings()
      storage.x = true
    }
  }

  addMatrixKeybindings () {
    const flip = this.flip.bind(this)
    this.keybind.add({ keys: ['h', 'left'], handler: flip('left') })
    this.keybind.add({ keys: ['j', 'down'], handler: flip('down') })
    this.keybind.add({ keys: ['k', 'up'], handler: flip('up') })
    this.keybind.add({ keys: ['l', 'right'], handler: flip('right') })
  }

  incrementScene () {
    let { scene } = this.state
    scene < 3 ? scene++ : scene = 0
    this.setState({ scene }, this.updateMatrix)
  }

  decrementScene () {
    let { scene } = this.state
    scene > 0 ? scene-- : scene = scenes.length - 1
    this.setState({ scene }, this.updateMatrix)
  }

  incrementLevel () {
    let { level } = this.state
    level < 3 ? level++ : level = 0
    this.setState({ level }, this.updateMatrix)
  }

  decrementLevel () {
    let { level } = this.state
    level > 0 ? level-- : level = 3
    this.setState({ level }, this.updateMatrix)
  }

  updateMatrix () {
    setScene(this.state)
    this.setYear()
    this.addPlay()
  }

  flip (direction) {
    return (e) => {
      this.setState({ flip: direction })
      switch (direction) {
        case 'up':
          this.decrementScene()
          break
        case 'down':
          this.incrementScene()
          break
        case 'left':
          this.decrementLevel()
          break
        case 'right':
          this.incrementLevel()
          break
      }
      setTimeout(() => {
        this.setState({ flip: false })
      }, 300)
    }
  }

  setYear () {
    const { scene } = this.state
    let year
    switch (scene) {
      case 0:
        year = 1984
        break
      case 1:
      case 2:
        year = 2016
        break
      case 3:
        year = 2048
        break
      default:
        year = 2016
    }
    this.setState({ year })
  }

  addPlay () {
    const { plays, unlocks, scene, level } = this.state
    const play = scenes[scene] + level
    plays.push(play)
    const lock = getUnlocks(plays)
    if (lock) {
      unlocks.push(lock)
      this.showAchievement(lock)
    }
    this.setState({ plays, unlocks })
  }

  showAchievement (achievement) {
    if (achievement) {
      this.setState({ achievement })
      this.timeout = null
      this.timeout = setTimeout(() => {
        this.setState({ achievement: false })
      }, 4000)
    }
  }

  /* Perf testing
   * To do: test safari
  componentDidUpdate () {
    const { step } = this.state
    if (step === 4) {
      console.log('Perf.start()')
      Perf.start()
    } else if (step === 64) {
      Perf.printWasted()
    } else if (step === 127) {
      Perf.stop()
      Perf.printWasted()
    }
  }
   */

  componentDidMount () {
    this.setState(bumpkit.state)
    this.addPlay()
    bumpkit.subscribe((state) => this.setState(state))

    // Add keyboard shortcuts
    this.keybind = new Keybind([
      { key: 'space', handler: bumpkit.playPause },
      { key: 'f', handler: fullscreen }
    ])

    if (storage.x) {
      bumpkit.setState({ loop: 128, intro: false })
      setScene(this.state)
      this.addMatrixKeybindings()
    } else {
      bumpkit.sync(this.introListener)
    }
  }

  render () {
    const {
      loading,
      year,
      step,
      intro,
      playing,
      scene,
      level,
      plays,
      achievement
    } = this.state

    const mode = year === 1984 ?
      '8bit' :
      year === 2048 ?
      'cyber' :
      'now'

    const sx = {
      root: {
        color: (mode === 'cyber') ? '#f00' : null
      }
    }

    if (loading) {
      return <Loading loading={loading} />
    }

    if (!playing) {
      return (
        <div>
          {!intro && <Paused />}
          <Controls {...this.state}
            flip={this.flip}
            playPause={bumpkit.playPause} />
        </div>
      )
    }

    return (
      <div style={sx.root}>
        <Stage {...this.state}
          mode={mode} />
        <Controls {...this.state}
          flip={this.flip}
          playPause={bumpkit.playPause} />
        <Year {...this.state} />
        {achievement && (
          <Fixed top left right m={4}>
            <Flex justify='center'>
              <Achievement {...achievement} />
            </Flex>
          </Fixed>
        )}
      </div>
    )
  }
}

export default App

