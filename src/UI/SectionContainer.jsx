import React from 'react'

//* Styles *// 
import cssClass from './Ui.module.css'

const SectionContainer = ({children}) => {
  return (
    <section className={cssClass.section} >{ children }</section>
  )
}

export default SectionContainer