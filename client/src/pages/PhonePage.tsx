import React from 'react'
import Nav from '../components/Nav'
import BrandProduct from '../components/BrandProduct'
import Footer from '../components/Footer'
import '../Phone.css'

const PhonePage = (): React.JSX.Element => {
  return (
    <div className='phone-page'>
        <Nav />
        <BrandProduct />
        <Footer />
    </div>
  )
}

export default PhonePage