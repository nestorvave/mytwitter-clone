import React from 'react'
import Like from '../../../Images/like.svg'
import Unlike from '../../../Images/unlike.svg'
import { db } from '../../../Firebase/firebase'
import { useContext } from 'react'
import { DataContext } from '../../../Context/DataProvider'

const Tweet = ({
    tweet,
    user,
    likes,
    profilePhoto,
    id
    
}) => {
    const {uiTweets, bookmarks, setBookmarks}=useContext( DataContext )
    
    
    
    let arrayFiltered =[] 

    function handleLike(likes,docId) {
        if (bookmarks.length===0) {
            db.doc(`tweets/${docId}`).update({likes:likes+1})
            arrayFiltered = uiTweets.filter(item => item.id === docId)
            setBookmarks([...bookmarks,arrayFiltered[0]])
           
        } else if (bookmarks.length>0) {
            let flag = bookmarks.some( book => docId=== book.id)
            console.log(flag)
            if(flag===false) {
                db.doc(`tweets/${docId}`).update({likes:likes+1})
                arrayFiltered = uiTweets.filter(item => item.id === docId)
                setBookmarks([...bookmarks,arrayFiltered[0]])
            }else{
                db.doc(`tweets/${docId}`).update({likes:likes-1})
                arrayFiltered = uiTweets.filter(item => item.id === docId)
                setBookmarks(bookmarks.filter(item => item.id !== docId))

            }
        }        
    }
    


  return (
    <main className='tweet' >
        <aside className='tweet__image' >
            <img className='tweet__image--userPP' src={ profilePhoto } alt="profile-photo"  />
        </aside>
        <section className='about' >
            <p className='about__profile' >@{user}</p>
            <p className='about__story' >
                {tweet}
            </p>
        </section>
        <section className='action' >
            <div 
                className='action__svg' 
            >
                <img src={Unlike} alt=""  />
                <p>2</p>
            </div>
            <div 
                className='action__svg' 
                onClick={ () => handleLike(likes,id) }
            >
                <img src={Like} alt="likes"  />
                <p>{likes}</p>
            </div>
        </section>

    </main>
  )
}

export default Tweet