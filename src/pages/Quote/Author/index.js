import React from 'react'
import './index.scss'

const Author = props => {
  return (
    <div className='quote__author'>
      <div className='author__el author__title'>Autor</div>
      <div className='author__el author__name'>{props.name}</div>
    </div>
  )
}

export default Author
