import React, { Children } from 'react'

//* Import Styles *// 
import cssClass from './Ui.module.css'

const FlexAround = ({children, className}) => {
  return (
    <div className={`${cssClass.flexAround} ${className}`} >
      {children}
    </div>
  )
}

export default FlexAround