import React from 'react'
import Nav from '../components/Nav'
import SignUp from '../components/SignUp'
import Footer from '../components/Footer'

const SignUpPage = (): React.JSX.Element => {
  return (
    <div className='signup-page'>
      <Nav />
      <SignUp />
      <Footer />
    </div>
  )
}

export default SignUpPage