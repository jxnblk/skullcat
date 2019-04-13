
import React from 'react'
import { Block } from 'rebass'
import Centered from './Centered'
import Btn from './Btn'
import { BlockCursor } from './Loading'

const sx = {
  root: {
    color: 'lime',
  },
  inner: {
    padding: 32,
    border: '1px solid'
  }
}

// https://twitter.com/intent/tweet?text=Open%20source%20icons%20for%20the%20web:%20&url=http://geomicons.com&via=jxnblk
const tweetLink = [
  'https://twitter.com/intent/tweet',
  '?text=Skullcat%203D',
  '&url=http://jxnblk.com/skullcat',
  '&via=jxnblk',
  '&related=mrmrs_'
].join('')

const Paused = () => {
  return (
    <div style={sx.root}>
      <BlockCursor />
      <Centered className='vhs-blur vhs-duration-4'>
        <Block mb={2}>
          Paused {' '}
        </Block>
        <Block mb={2}>
          <Btn href={tweetLink}
            target='_blank'
            children='Tweet' />
        </Block>
        <Block mb={0}>
          <Btn href='/skullcat/1'
            children='2014' />
          <Btn href='/skullcat/2'
            children='2015' />
          <Btn href='/skullcat/guidelines'
            children='Brand Guidelines' />
        </Block>
      </Centered>
    </div>
  )
}

export default Paused

