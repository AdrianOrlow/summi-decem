import React from 'react'
import './index.scss'
import ProposeQuote from './ProposeQuote'

import RandomQuoteButton from '../../components/RandomQuoteButton'

const Home = () => {
  return (
    <div className='home'>
      <p className='home__info'>Najciekawsze cytaty dziesięciu (subiektywnie) najlepszych programistów w historii. Zarówno po angielsku jak i polsku, aby zachować pełną ich wartość. Kliknij przycisk poniżej, aby je poznać. Możesz też zaproponować własne.</p>
      <RandomQuoteButton title='Losuj cytat' defaultPersonID={''} />
      <ProposeQuote />
    </div>
  )
}

export default Home
