import React from 'react'
import Nav from '../components/Nav'
import SignIn from '../components/SignIn'
import Footer from '../components/Footer'

const SignInPage = (): React.JSX.Element => {
  return (
    <div className='signin-page'>
      <Nav />
      <SignIn />
      <Footer />
    </div>
  )
}

export default SignInPage