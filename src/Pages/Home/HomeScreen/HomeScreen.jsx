import React from 'react'
import { useContext, useState } from 'react';
import Logo from '../../../Images/logo.svg';
import FeedRouter from '../../../Routers/FeedRouter';
import { DataContext } from '../../../Context/DataProvider'
import Aside from '../Aside/Aside';
import NewTweet from '../NewTweet/NewTweet';
import Message from '../../../Components/Message/Message';
import sadFace from '../../../Images/sadFace.svg'
import {db} from '../../../Firebase/firebase'

const HomeScreen = () => {

  const { user, isDeleting, setIsDeleting } = useContext( DataContext )
  const { profilePhoto } = user
  const [ open, setOpen ]=useState(false)

  const {idTweet,idUser}= isDeleting;


  function handleDeleteOfDb(idTweet,idUser) {
    if(user.uid===idUser){
        db.doc(`tweets/${idTweet}`).delete()
        setIsDeleting({
          status:false,
          idTweet:"",
          idUser:"",
        })
    }
}
  

  return (
    <main className='mainHomeScreen ' >
      {
        open && <Aside setOpen={setOpen} />
      }
      {
        isDeleting.status && 
                  <Message 
                    image={sadFace}
                    p={"Do you want to delete this tweet"}
                    cancel={ ()=> setIsDeleting(false) }
                    confirm={ ()=> handleDeleteOfDb(idTweet,idUser)  }

                  />
      }
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
        <div className="desktop--aside" >
            <Aside  setOpen={setOpen} />
        </div>
      <section className='main-content' >
        <div className="desktop--newtweet" >
            <NewTweet />
        </div>
        <FeedRouter />

      </section>
    
    </main>
  

  )
}

export default HomeScreen