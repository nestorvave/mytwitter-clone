import React from 'react'
import Tweet from '../Tweet/Tweet'
import {Link} from 'react-router-dom'
import useGetTweets from '../../../Helpers/useGetTweets'
import { useContext } from 'react'
import { DataContext } from '../../../Context/DataProvider'
import { useEffect } from 'react'



export function getStorageValue(defaultValue=[]) {
  const saved = localStorage.getItem("bookmarks");
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

const Feed = () => {

  const { uiTweets, setUiTweets,setBookmarks } = useContext( DataContext );
  const getTweets = useGetTweets()

  //get tweets to Display on UI
  useEffect(()=>{
    setUiTweets( getTweets )
  },[getTweets, setUiTweets])

  //Get Localstorage after first render
  useEffect(() => {
    setBookmarks( getStorageValue )
  }, [setBookmarks])


    
  return (
    <>
        {
            uiTweets.map( item => (
               <Tweet 
                  key={ item.id }
                  id={ item.id }
                  tweet={ item.tweet }
                  userTwitter={ item.user }
                  email={ item.email }
                  likes={ item.likes }
                  profilePhoto={ item.profilePhoto }
                  uid={ item.uid }
               
               /> 
            ))
        }
      <Link to="/create" className='btn-tweet'>+</Link>
    </>
  )
}

export default Feed