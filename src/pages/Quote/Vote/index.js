import React from 'react'
import Star from './Star'
import './index.scss'

const renderStars = rating => {
  const Stars = []

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      Stars.push(<Star isFilled />)
    } else {
      Stars.push(<Star />)
    }
  }

  return Stars
}

const Vote = props => {
  return <div className='quote__vote'>{renderStars(props.rating)}</div>
}

export default Vote
