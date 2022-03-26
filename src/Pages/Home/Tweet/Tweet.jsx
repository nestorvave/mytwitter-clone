import React, { useEffect } from 'react'
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
    const {uiTweets ,bookmarks, setBookmarks}=useContext( DataContext )

    //Setting in the localStorage bookmarks state
    useEffect(() => {

        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    }, [uiTweets,bookmarks])

    let arrayFiltered =[] 

    /**
     *
     * @description fn to add and remove likes and save in state to display bookmarks tweets
     * @param {*which is received by map fn of each item} likes
     * @param {*which is received by map fn of each item, id of each tweet} docId
     */
    function handleLike(like,docId) {
        if (bookmarks.length===0) {
            db.doc(`tweets/${docId}`).update({likes:like+1})
            arrayFiltered = uiTweets.filter(item => item.id === docId)
            setBookmarks([...bookmarks,arrayFiltered[0]])
           
        } else if (bookmarks.length>0) {
            let flag = bookmarks.some( book => docId=== book.id)
            if(flag===false) {
                db.doc(`tweets/${docId}`).update({likes:like+1})
                arrayFiltered = uiTweets.filter(item => item.id === docId)
                arrayFiltered[0]={...arrayFiltered[0],likes:like+1}
                setBookmarks([...bookmarks,arrayFiltered[0]])
            }else{
                db.doc(`tweets/${docId}`).update({likes:like-1})
                arrayFiltered = uiTweets.filter(item => item.id === docId)
                setBookmarks(bookmarks.filter(item => item.id !== docId))

            }
        }        
    }
    


  return (
    <main className='tweet' >
        <aside className='tweet__image' >
            <img className='tweet__image--userPP' src={ profilePhoto } alt="profile"  />
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
                <img src={Unlike} alt="unlike"  />
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