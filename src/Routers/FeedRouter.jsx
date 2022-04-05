/**
 * Dependencies
 */
import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
/**
 * Components
 */
import Bookmarks from '../Pages/Home/Bookmarks/Bookmarks';
import Feed from '../Pages/Home/Feed/Feed';
import Profile from '../Pages/Home/Profile/Profile';

const FeedRouter = () => {
  return (
    <>
    <Switch>
      <Route 
          exact
          path="/home/feed"
          component={ Feed }
      />
      <Route 
          exact
          path="/home/bookmarks"
          component={ Bookmarks }
      />
      <Route 
          exact
          path="/home/profile"
          component={ Profile }
      />


      <Redirect to="/home/feed" />
    </Switch>
    </>
  )
}

export default FeedRouter