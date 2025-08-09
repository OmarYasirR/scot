import React from 'react'
import Header from './Header'
import Footer from './footer'

const layout = ({children}) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default layout