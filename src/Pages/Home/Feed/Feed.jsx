import React from 'react'
import Tweet from '../Tweet/Tweet'
import {Link} from 'react-router-dom'
import useGetTweets from '../../../Helpers/useGetTweets'
import { useContext } from 'react'
import { DataContext } from '../../../Context/DataProvider'
import { useEffect } from 'react'

const Feed = () => {

  const { uiTweets, setUiTweets } = useContext( DataContext );
  const getTweets = useGetTweets()

  useEffect(()=>{
    setUiTweets( getTweets )
  },[getTweets])
  console.log(uiTweets)
  console.log(getTweets)
    
  return (
    <>
        {
            uiTweets.map( item => (
               <Tweet 
                  tweet={item.tweet}
                  user={item.user}
                  email={item.email}
                  likes={item.likes}
               /> 
            ))
        }
      <Link to="/create" className='btn-tweet'></Link>
    </>
  )
}

export default Feed