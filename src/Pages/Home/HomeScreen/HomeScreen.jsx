import React from 'react'
import { useContext, useState } from 'react';
import Logo from '../../../Images/logo.svg';
import FeedRouter from '../../../Routers/FeedRouter';
import { DataContext } from '../../../Context/DataProvider'
import Aside from '../Aside/Aside';
import NewTweet from '../NewTweet/NewTweet';

const HomeScreen = () => {

  const { user } = useContext( DataContext )
  const { profilePhoto } = user
  const [ open, setOpen ]=useState(false)
  


  return (
    <main className='mainHomeScreen flex-center' >
      {
        open && <Aside setOpen={setOpen} />
      }
      <div className="desktop" >
          <Aside  setOpen={setOpen} />
      </div>
      <nav className='navHomeScreen ' >
        <img 
          className='navHomeScreen__profilePicture' 
          src={ profilePhoto } 
          alt="profilePhoto" 
          onClick={()=>setOpen(!open)}
        />
        <img className='navHomeScreen__logo' src={Logo} alt="logo"  />
        <span className='navHomeScreen__logo' ></span>
      </nav>
      <div className="desktop" >
          <NewTweet />
      </div>
      <FeedRouter />
    
    </main>
  

  )
}

export default HomeScreen