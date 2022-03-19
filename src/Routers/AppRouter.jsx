import React from 'react'
import { useEffect } from 'react';
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




const AppRouter = () => {

  const [loading, setLoading] = useState( true )
  const [status, setStatus] = useState( false )
 

  useEffect(()=>{
    firebase.auth().onAuthStateChanged( user =>{
      if ( user!== null ){
        setStatus(true)
      }
      console.log(user)
    })
    setLoading(false)
    
  },[setStatus,setLoading])

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


           <Redirect to={(status && loading===false )  ? '/home':'/auth/register'}/>
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter