import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import AboutBox from './components/AboutBox'
import ContactBox from './components/ContactBox'
import Footer from './components/Footer'

const App = (): React.JSX.Element => {

  return (
    <>
      <Nav />
      <Hero />
      <AboutBox />
      <ContactBox />
      <Footer />
    </>
  )
}

export default App
