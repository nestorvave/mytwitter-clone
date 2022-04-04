import React from 'react'
import { useEffect, useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HomeScreen from '../Pages/Home/HomeScreen/HomeScreen';
import NewTweet from '../Pages/Home/NewTweet/NewTweet';
import AuthRouter from './AuthRouter';
import firebase from '../Firebase/firebase'
import { useState } from 'react';
import { DataContext  } from '../Context/DataProvider';




const AppRouter = () => {

  const [loading, setLoading] = useState( true )
  const { user, setUser, status, setStatus } = useContext( DataContext)
 

  useEffect(()=>{
    firebase.auth().onAuthStateChanged( userStatus =>{

      if ( userStatus!== null ){
        console.log( userStatus )
        setStatus(true)
        setUser({
          ...user,
          uid:userStatus.uid,
          email:userStatus.email,
          user:userStatus.displayName,
          profilePhoto:userStatus.photoURL

        })
        

      }

    })
    setLoading(false)
    
  },[setStatus, setLoading])

  if(loading){
    return(
      <h1>Wait...</h1>
    )
  }

  return (
    <Router>
      <div className='homePage' >
        <Switch>
          {
            status 
              ?
                <Route
                  path='/home'
                  component={ HomeScreen } 
                /> 
              :
                <Route
                  path='/auth'
                  component={ AuthRouter } 
                />
          }

          <Route 
            path="/create"
            component={ NewTweet }
          />

          <Redirect to={(status && loading===false )  ? '/home/feed':'/auth/login'}/>
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter