import React from 'react'
import RandomQuoteButton from '../../components/RandomQuoteButton'
import './index.scss'

const Home = () => {
  return (
    <div className='home'>
      <p className='home__info'>Każdy wyborca powinien mieć pewność na kogo głosuje. W tym celu powstali Konfederaci – aplikacja pozwalająca na głębsze zapoznanie się z poglądami liderów Konfederacji. Kliknij przycisk poniżej, aby wejść w ich świat.</p>
      <RandomQuoteButton title='Losuj cytat' />
    </div>
  )
}

export default Home
