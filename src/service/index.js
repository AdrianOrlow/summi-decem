import fetch from 'node-fetch'
const APIDir = 'https://summi-decem.herokuapp.com/api'

const API = {
  getQuotesIDsByPID: (pid) => {
    return fetch(`${APIDir}/quotes/${pid}`)
      .then(res => res.json())
      .then(json => json.quotes)
      .catch(error => console.error(error))
  },
  getQuoteByID: (qid) => {
    return fetch(`${APIDir}/quote/${qid}`)
      .then(res => res.json())
      .catch(error => console.error(error))
  },
  postProposedQuote: (data) => {
    return fetch(`${APIDir}/quote/`, {
      method: 'post',
      body: JSON.stringify(data)
    })
      .then(res => res.ok)
      .catch(error => console.error(error))
  }
}

export default API
