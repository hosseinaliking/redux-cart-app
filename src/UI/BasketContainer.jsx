import React from 'react'

//* Styled *// 
import cssClass from './Ui.module.css'

const BasketContainer = ({children, className}) => {
  return (
    <div className={`${cssClass.basketContainer} ${className}`} >
      { children }
    </div>
  )
}

export default BasketContainer