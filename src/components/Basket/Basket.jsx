import React from 'react'

//* Redux *//
import { useSelector } from 'react-redux'


//* Components *// 
import BasketItem from './BasketItem/BasketItem'

//* Styles UI components *// 
import BasketContainer from '../../UI/BasketContainer'

//* Styles *// 
import cssClass from './Basket.module.css'



const Basket = () => {
  const items = useSelector(state => state.basket.items);


  return (
    <BasketContainer className={cssClass.basketContainer}>
      <h2 className={cssClass.basketTitle} >Your Shopping Cart</h2>

      { items.length === 0 && <p className={cssClass.noItemText} >There is no item in basket</p> }

      {items.map((item, index) => {
        return <BasketItem key={index} data={item} />
      })}
    </BasketContainer>
  )
}

export default Basket