import React from 'react'
import history from '../../history'
import './index.scss'

import RandomIcon from './RandomIcon'
import AnimatedCircleIcon from '../AnimatedCircleIcon'

import API from '../../service'

class RandomQuoteButton extends React.Component {
  constructor (props) {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.state = {
      personID: '',
      isLoading: false
    }
  }

  componentDidMount () {
    this.setState({ personID: this.props.defaultPersonID })
  }

  handleButtonClick () {
    let pID = this.state.personID

    this.setState({ isLoading: true })

    API.getQuotesIDsByPID(pID)
      .then(quotes => quotes[Math.floor(Math.random() * quotes.length)])
      .then(quote => history.push(`/quote/${quote.person_id}/${quote.id}`))
      .catch(error => {
        history.push(`/404`)
        console.error(error)
      })
      .finally(() => this.setState({ isLoading: false }))
  }

  handleChange (e) {
    this.setState({ personID: e.target.value })
  }

  render () {
    const isLoading = this.state.isLoading
    return (
      <div className='btn--rq'>
        {isLoading
          ? <div className='btn--rq__el btn--rq__title'>
            <AnimatedCircleIcon stroke='#2c3a49' />
          </div>
          : <div className='btn--rq__el btn--rq__title' onClick={this.handleButtonClick}>
            <RandomIcon />
            {this.props.title}
          </div>
        }
        <select className='btn--rq__el btn--rq__select' onChange={this.handleChange.bind(this)} value={this.state.personID}>
          <option value={''}>wszyscy</option>
          <option value={1}>Lovelace</option>
          <option value={2}>Ritchie</option>
          <option value={3}>Stroustrup</option>
          <option value={4}>van Rossum</option>
          <option value={5}>Gosling</option>
          <option value={6}>Torvalds</option>
          <option value={7}>Kernighan</option>
          <option value={8}>Berners-Lee</option>
          <option value={9}>Knuth</option>
          <option value={10}>Thompson</option>
        </select>
      </div>
    )
  }
}

export default RandomQuoteButton
