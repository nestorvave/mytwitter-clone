import React, { useEffect } from 'react'
import Like from '../../../Images/like.svg'
import Unlike from '../../../Images/unlike.svg'
import { db } from '../../../Firebase/firebase'
import { useContext } from 'react'
import { DataContext } from '../../../Context/DataProvider'

const Tweet = ({
    tweet,
    userTwitter,
    likes,
    profilePhoto,
    id,
    uid
}) => {
    const {uiTweets ,bookmarks, setBookmarks, user}=useContext( DataContext )

    //Setting in the localStorage bookmarks state
    useEffect(() => {
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    }, [bookmarks])
    
    /**
     *
     * @description fn to add and remove likes and save in state to display bookmarks tweets
     * @param {*which is received by map fn of each item} likes
     * @param {*which is received by map fn of each item, id of each tweet} docId
     */
    
    let arrayFiltered =[] 
    
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
                setBookmarks(bookmarks.filter(item => item.id !== docId))

            }
        }        
    }
    

    function deleteCurrentTweet(idTweet,idUser) {
        if(user.uid===idUser){
            db.doc(`tweets/${idTweet}`).delete()
            console.log("tweet borrado")
            console.log(user.uid,idUser)

        }else{
            console.log("tweet no borrado")
            console.log(user.uid,idUser)

        }


    }



  return (
    <main className='tweet' >
        <aside className='tweet__image' >
            <img className='tweet__image--userPP' src={ profilePhoto } alt="profile"  />
        </aside>
        <section className='about' >
            <p className='about__profile' >@{userTwitter}</p>
            <p className='about__story' >
                {tweet}
            </p>
        </section>
        <section className='action' >
            <div 
                className='action__svg' 
                onClick={ () => deleteCurrentTweet(id,uid) }
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