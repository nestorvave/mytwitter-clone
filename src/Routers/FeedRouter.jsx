import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Bookmarks from '../Pages/Home/Bookmarks/Bookmarks';
import Feed from '../Pages/Home/Feed/Feed';
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


    {/* <Redirect to="/home/feed" /> */}
    </Switch>
    </>
  )
}

export default FeedRouter