import fetch from 'node-fetch'
const APIDir = 'http://localhost/api'

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
  }
}

export default API
