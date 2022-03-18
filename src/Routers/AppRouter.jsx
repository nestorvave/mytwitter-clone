import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HomeScreen from '../Pages/Home/HomeScreen/HomeScreen';
import NewTweet from '../Pages/Home/NewTweet/NewTweet';
import AuthRouter from './AuthRouter';

const AppRouter = () => {
  return (
    <Router>
      <div className='homePage' >
        <Switch>
          <Route
            path='/home'
            component={ HomeScreen } 
          />
           <Route
            path='/auth'
            component={ AuthRouter } 
          />
          <Route 
            path="/create"
            component={ NewTweet }
          />


           {/* <Redirect to="/auth"/> */}
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter