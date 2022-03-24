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
    const {uiTweets, setUiTweets, bookmarks, setBookmarks}=useContext( DataContext )
    
    
    
    let arrayFiltered =[] 

    function handleLike(likes,docId) {
        console.log("in mi fn")
        if (bookmarks.length===0) {
            db.doc(`tweets/${docId}`).update({likes:likes+1})
            arrayFiltered = uiTweets.filter(item => item.id === docId)
            setBookmarks([...bookmarks,arrayFiltered[0]])
            return
            
        }else{

            for (let index = 0; index < bookmarks.length; index++) {
                if(docId===bookmarks[index].id){
                    console.log("son iguales")
                    break
                }else{
                    console.log("son diferentes")
                    db.doc(`tweets/${docId}`).update({likes:likes+1})
                    arrayFiltered = uiTweets.filter(item => item.id === docId)
                    setBookmarks([...bookmarks,arrayFiltered[0]])
                    break
                }
            
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
                className='action__svg' >
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