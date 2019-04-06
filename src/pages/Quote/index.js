import React from 'react'
import './index.scss'
import './share.svg'

import Author from './Author'
import Source from './Source'
import Share from './Share'

import API from '../../service'
import history from '../../history'

import RandomQuoteButton from '../../components/RandomQuoteButton'

class Quote extends React.Component {
  constructor () {
    super()
    this.getQuote = this.getQuote.bind(this)
    this.state = {
      text: '',
      author: '',
      source: '',
      personID: ''
    }
  }

  componentDidMount () {
    const pID = this.props.match.params.pid
    const qID = this.props.match.params.qid
    this.getQuote(qID)
    this.setState({ personID: pID })

    history.listen((location) => {
      const path = location.pathname.split('/')
      const pathQID = path[3]

      if (pathQID !== undefined) {
        this.getQuote(pathQID)
      }
    })
  }

  getQuote (qID) {
    API.getQuoteByID(qID)
      .then(res => {
        this.setState({
          text: res.text,
          author: res.author,
          source: res.source
        })
      })
      .catch(error => {
        console.error(error)
        history.push(`/404`)
      })
  }

  render () {
    return (
      <div className='quote'>
        {this.state.text.length > 0 &&
          <div className='quote__content'>
            <div className='quote__text'>
              "{this.state.text}"
            </div>
            <div className='quote__info'>
              <Author name={this.state.author} />
              <Source link={this.state.source} />
            </div>
          </div>
        }
        <Share link={window.location} />
        <RandomQuoteButton title='Losuj dalej' defaultPersonID={this.state.personID} />
      </div>
    )
  }
}

export default Quote
