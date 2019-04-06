import React from 'react'
import './index.scss'

import LinkIcon from '../../../components/LinkIcon'
import AnimatedCircleIcon from '../../../components/AnimatedCircleIcon'

import API from '../../../service'

class ProposeQuote extends React.Component {
  constructor () {
    super()
    this.state = {
      errorOccured: false,
      requestSent: false,
      isLoading: false,
      data: {
        person_id: 1,
        source: '',
        text: ''
      }
    }

    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      data: {
        ...this.state.data,
        [name]: value
      }
    })
  }

  handleButtonClick () {
    this.setState({ isLoading: true })

    API.postProposedQuote(this.state.data)
      .then(res => {
        if (!res) {
          this.setState({ errorOccured: true })
        }
      })
      .catch(error => {
        this.setState({ errorOccured: true })
        console.error(error)
      })
      .finally(() => {
        this.setState({
          requestSent: true,
          isLoading: false
        })

        setTimeout(() => {
          this.setState({ requestSent: false })
        }, 2000)
      })
  }

  render () {
    const isLoading = this.state.isLoading
    let button

    if (isLoading) {
      button = <button className='bottom__button'><AnimatedCircleIcon stroke='#ecf0f1' /></button>
    } else {
      button = <button className='bottom__button' onClick={this.handleButtonClick}>Wyślij</button>
    }

    return (
      <div className='pquote'>
        <div className='pquote__top'>
          <div className='top__title'>
            Zaproponuj cytat
          </div>
          <select
            className='top__select'
            name='person_id'
            required
            onChange={this.handleInputChange}>
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
        <div className='pquote__text'>
          <textarea
            placeholder='Religia dla mnie jest nauką, i nauka jest religią'
            name='text'
            required
            onChange={this.handleInputChange} />
        </div>
        <div className='pquote__source'>
          <div className='source__icon'>
            <LinkIcon />
          </div>
          <input
            className='source__input'
            name='source'
            placeholder='Źródło'
            required
            onChange={this.handleInputChange} />
        </div>
        <div className='pquote__bottom'>
          <div
            className={
              'bottom__info' +
              (this.state.errorOccured === true ? ' bottom__info--red' : ' bottom__info--green') +
              (this.state.requestSent === true ? ' bottom__info--showed' : '')}
          >{this.state.errorOccured === true ? 'Wystąpił błąd' : 'Wysłano pomyślnie'}</div>
          {button}
        </div>
      </div>
    )
  }
}

export default ProposeQuote
