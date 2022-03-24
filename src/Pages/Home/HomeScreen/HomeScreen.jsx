import React from 'react'
import { useContext } from 'react';
import Logo from '../../../Images/logo.svg';
import FeedRouter from '../../../Routers/FeedRouter';
import { DataContext } from '../../../Context/DataProvider'

const HomeScreen = () => {

  const { user } = useContext( DataContext )
  const { profilePhoto } = user
  


  return (
    <main className='mainHomeScreen flex-center' >
      <nav className='navHomeScreen ' >
        <img className='navHomeScreen__profilePicture' src={ profilePhoto } alt="profilePhoto" />
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