import React from 'react'
import Tweet from '../Tweet/Tweet'
import {Link} from 'react-router-dom'

const Feed = () => {

  const each=[1,2,3,4,5,6,7]
  console.log(each)

  
    
  return (
    // <>
    //     {
    //         each.map( item => (
    //             <Tweet />
    //         ))
    //     }
    // </>
    <>
        {
            each.map( item => ( <Tweet /> ))
        }
      <Link to="/create" className='btn-tweet'></Link>
    </>
  )
}

export default Feed