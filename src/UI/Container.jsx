import React from 'react'

//* Styles *// 
import cssClass from './Ui.module.css'

const Container = ({children}) => {
  return (
    <div className={cssClass.container} >
      {children}
    </div>
  )
}

export default Container