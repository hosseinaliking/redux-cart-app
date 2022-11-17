import React from 'react'

//* Styled UI components *// 
import SectionContainer from '../../UI/SectionContainer'

//* Styles *// 
import cssClass from './Products.module.css'

//* Components *//
import CartProduct from './CartProduct/CartProduct'

const Products = ({data}) => {
  return (
    <SectionContainer>
      <h2 className={cssClass.title} >BUY YOUR FAVORITE PRODUCTS</h2>

      <div className={cssClass.cartContainer}>
        {data.map((item, index) => {
          return <CartProduct key={index} data={item} />
        })}
      </div>
    </SectionContainer>
  )
}

export default Products