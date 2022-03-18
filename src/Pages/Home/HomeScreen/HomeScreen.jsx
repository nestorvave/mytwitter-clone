import React from 'react'
import Logo from '../../../Images/logo.svg';
import FeedRouter from '../../../Routers/FeedRouter';

const HomeScreen = () => {


  return (
    <main className='mainHomeScreen flex-center' >
      <nav className='navHomeScreen ' >
        <img className='navHomeScreen__profilePicture' src="https://lh3.googleusercontent.com/lE2n1mJw6-mo3vR5iaG2DTOxjlc0hhSfhrSFH5wAL09OwTL3Nz8wNTCElEC6tLKgXCMo-lgsYtPJ6i59tYKli9MRMyRe2awWUjUViw=w1400-k" alt="" />
        <img className='navHomeScreen__logo' src={Logo} alt="logo"  />
        <span className='navHomeScreen__logo' ></span>
      </nav>
      <div>

      </div>
       <FeedRouter />
    
    </main>
  

  )
}

export default HomeScreen