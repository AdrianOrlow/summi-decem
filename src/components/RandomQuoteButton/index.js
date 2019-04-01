import React from 'react'
import history from '../../history'
import './index.scss'

import RandomIcon from './RandomIcon'
import AnimatedCircleIcon from './AnimatedCircleIcon'

import API from '../../service'

class RandomQuoteButton extends React.Component {
  constructor (props) {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = {
      personID: 0,
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({personID: this.props.defaultPersonID})
  }

  handleButtonClick () {
    let pID = this.state.personID

    this.setState({isLoading: true});

    API.getQuotesIDsByPID(pID)
      .then(res => res[Math.floor(Math.random() * res.length)])
      .then(qID => history.push(`/quote/${pID}/${qID}`))
      .catch(error => console.error(error))
      .finally(() => this.setState({isLoading: false}))
  }
  
  handleChange (e) {
    this.setState({personID: e.target.value})
  }

  render () {
    const isLoading = this.state.isLoading
    let button

    if (isLoading) {
      button = <AnimatedCircleIcon/>
    } else {
      button =
        <div>
          <RandomIcon />
          {this.props.title}
        </div>
    }

    return (
      <div className='btn--rq'>
        <div className='btn--rq__el btn--rq__title' onClick={this.handleButtonClick}>
          {button}
        </div>
        <select className='btn--rq__el btn--rq__select' onChange={this.handleChange.bind(this)} value={this.state.personID}>
          <option value={0}>wszyscy</option>
          <option value={1}>korwin-mikke</option>
          <option value={2}>braun</option>
          <option value={3}>liroy-marzec</option>
          <option value={4}>winnicki</option>
          <option value={5}>bosak</option>
          <option value={6}>godek</option>
          <option value={7}>berkowicz</option>
          <option value={8}>mentzen</option>
          <option value={9}>jakubiak</option>
          <option value={10}>wilk</option>
          <option value={11}>kulesza</option>
          <option value={12}>sośnierz</option>
          <option value={13}>maciejowski</option>
          <option value={14}>tumanowicz</option>
        </select>
      </div>
    )
  }
}

export default RandomQuoteButton
