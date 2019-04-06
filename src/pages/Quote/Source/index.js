import React from 'react'
import './index.scss'

const Source = props => {
  return (
    <div className='quote__source'>
      <a className='source__el source__link' href={props.link} target="_blank" rel="noopener noreferrer">
        Źródło
      </a>
    </div>
  )
}

export default Source
