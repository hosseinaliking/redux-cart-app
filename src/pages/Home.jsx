import React from 'react'

//* Redux *// 
import { useSelector } from 'react-redux'

//* Styles UI components *//
import HomeContent from '../UI/HomeContent'

//* Components *//
import Header from '../components/Header/Header'
import Products from '../components/Products/Products'
import Basket from '../components/Basket/Basket'


const Home = ({data}) => {
  const basketShow = useSelector(state => state.ui.showBasket);

  return (
    <div>
      <Header />

      <HomeContent>
        {basketShow && <Basket />}
        
        <Products data={data} />
      </HomeContent>
    </div>
  )
}

export default Home