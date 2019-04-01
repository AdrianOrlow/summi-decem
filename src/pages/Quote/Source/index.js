import React from 'react'
import './index.scss'

const Source = props => {
  return (
    <div className='quote__source'>
      <div className='source__el source__title'>Nie wierzysz?</div>
      <a className='source__el source__link' href={props.link} target="_blank" rel="noopener noreferrer">
        Źrodło
      </a>
    </div>
  )
}

export default Source
