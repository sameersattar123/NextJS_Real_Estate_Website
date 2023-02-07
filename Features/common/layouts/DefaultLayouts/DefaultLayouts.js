import React from 'react'
import Footer from '../../modules/Footer'
import Navigation from '../../modules/Navigations/Navigation'

const DefaultLayouts = ({children}) => {
  return (
    <>
   <Navigation/>
   {children}
   <Footer/>
    </>
  )
}

export default DefaultLayouts
