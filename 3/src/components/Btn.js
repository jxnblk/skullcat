
import React from 'react'

const sx = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  height: 32,
  minWidth: 32,
  padding: 8,
  fontFamily: 'inherit',
  fontSize: 14,
  fontWeight: 'bold',
  color: 'inherit',
  backgroundColor: 'transparent',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: 'currentcolor',
  cursor: 'pointer',
  outline: 'none',
  WebkitAppearance: 'none',
  textDecoration: 'none'
}

const Btn = (props) => {
  const Comp = props.href ? 'a' : 'button'
  return <Comp {...props} className='Btn' style={sx} />
}

export default Btn

