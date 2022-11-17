import React from 'react'

//* Styles *// 
import cssClass from './Ui.module.css'

const HomeContent = ({children}) => {
  return (
    <div className={cssClass.homeContent} >{ children }</div>
  )
}

export default HomeContent