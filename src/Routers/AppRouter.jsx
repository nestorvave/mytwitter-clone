import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import LoginScreen from '../Pages/Auth/LoginScreen/LoginScreen';
import HomeScreen from '../Pages/Home/HomeScreen/HomeScreen';
import AuthRouter from './AuthRouter';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path='/'
            component={ HomeScreen } 
          />
           <Route
            path='/auth'
            component={ AuthRouter } 
          />
           {/* <Redirect to="/auth"/> */}
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter