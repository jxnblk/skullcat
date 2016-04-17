
import React from 'react'
import Tachyon from './Tachyon'

const length = 256
const x = 16
const tachyons = Array.from({ length }, (a, b) => b)
  .map((n) => (
    <Tachyon key={n}
      transform={`translate(${n * x - (length * x / 2)}, 32)`} />
  ))

const sx = {
  color: '#ccc'
}

const Tachyons = ({ active }) => {
  if (!active) {
    return <g />
  }

  return (
    <g className='an-scroll'>
      {tachyons}
    </g>
  )
}

export default Tachyons
