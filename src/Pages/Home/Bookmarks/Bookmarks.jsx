import React from 'react'
import { useContext, useEffect } from 'react'
import { DataContext } from '../../../Context/DataProvider'
import { getStorageValue } from '../Feed/Feed'
import Tweet from '../Tweet/Tweet'

const Bookmarks = () => {

  const { bookmarks, setBookmarks }=useContext( DataContext )
  console.log(bookmarks)
  useEffect(() => {
    setBookmarks( getStorageValue )
  }, [setBookmarks])

  return (
    <div className='tweetsFeed flex-center' >
      <h2>{Bookmarks.length===0 ? "Any Bookmarks" : "Bookmarks"}</h2>
    {
        bookmarks.map( item => (
           <Tweet 
              key={ item.id }
              id={ item.id }
              tweet={ item.tweet }
              userTwitter={ item.user }
              email={ item.email }
              likes={ item.likes }
              profilePhoto={ item.profilePhoto }
           
           /> 
        ))
    }
  
</div>
  )
}

export default Bookmarks