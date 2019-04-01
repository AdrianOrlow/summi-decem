import React from 'react'
import './index.scss'
import './share.svg'

import Author from './Author'
import Source from './Source'
import Share from './Share'

import API from '../../service'

import RandomQuoteButton from '../../components/RandomQuoteButton'

class Quote extends React.Component {
  constructor () {
    super()
    this.state = {
      text: '',
      author: '',
      source: '',
      personID: 0
    }
  }

  componentDidMount() {
    const pID = this.props.match.params.pid
    const qID = this.props.match.params.qid

    this.setState({personID: pID})
    
    API.getQuoteByID(qID)
       .then(res => {
         this.setState({
           text: res.text,
           author: res.author,
           source: res.source
          })
       })
  }

  render () {
    return (
      <div className='quote'>
        {this.state.text.length > 0 &&
          <div>
            <div className='quote__content'>
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
