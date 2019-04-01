import React from 'react'
import './index.scss'

const ErrorEl = props => {
  return (
    <div className='error'>
      <div className='error__title'>{props.title}</div>
      <div className='error__info'>{props.info}</div>
    </div>
  )
}

export default ErrorEl
