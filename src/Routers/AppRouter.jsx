/**
 * Dependencies
 */
import React, { useEffect, useContext, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

/**
 * Components
 */
import HomeScreen from '../Pages/Home/HomeScreen/HomeScreen';
import NewTweet from '../Pages/Home/NewTweet/NewTweet';
import AuthRouter from './AuthRouter';

/**
 * Firebase
 */
import firebase from '../Firebase/firebase'

/**
 * Helpers
 */
import { DataContext  } from '../Context/DataProvider';


/**
 * Libraries
 */
import GridLoader from "react-spinners/GridLoader";
import { css } from "@emotion/react";

//styles of Spinner
const override = css`
  display: block;
  margin: 0 auto;
  position:absolute;
  top:35%;
  left:33%;
`;



const AppRouter = () => {

  const [loading, setLoading] = useState( true )
  const { user, setUser, status, setStatus } = useContext( DataContext)
 

  useEffect(()=>{
    firebase.auth().onAuthStateChanged( userStatus =>{
      if ( userStatus!== null ){
        setLoading(false)
        setUser({
          ...user,
          uid:userStatus.uid,
          email:userStatus.email,
          user:userStatus.displayName,
          profilePhoto:userStatus.photoURL
          
        })
        setStatus(true)
      }
      setLoading(false)

    })
    
  },[setStatus, setLoading])

  if(loading){
    return(
      <GridLoader color="#82C35F" size={60} css={override} />
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