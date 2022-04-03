import React from 'react'
import useUpdateDb from '../../../Helpers/useUpdateDb'
import { useContext } from 'react'
import { DataContext } from '../../../Context/DataProvider'
import useForm from '../../../Hooks/useForm'
import { useHistory } from "react-router-dom";


const NewTweet = () => {
    const { uiTweets, setUiTweets,user } = useContext( DataContext )
    const[values,handleForm,setValues]=useForm({newTweet:""})
    const {newTweet}= values
    const history = useHistory()


     function AddingTweet(e) {
         e.preventDefault()
         const newTweetByUser={
             ...user,
             tweet:newTweet,
             likes:0,
             date: new Date().getTime()
         }
         console.log(newTweetByUser)
         setValues({newTweet:""})
         useUpdateDb(uiTweets, setUiTweets, newTweetByUser)
         history.push("home/feed")

    
    }

    function cancelTweet() {
        history.push("home/feed")
    }


  return (
    <main className='tweet-section flex-center' >
        <nav className='tweet-nav' >
            <button 
                className='tweet-nav__button tweet-nav__button--cancel'
                onClick={ cancelTweet }
            >
                Cancel
            </button>
             <button 
                className='tweet-nav__button button--primary'
                onClick={ AddingTweet }
             >
                Tweet
            </button>
        </nav>
        <section className='text-area-section '>
            <div className='profile' >
                <img src={user.profilePhoto} alt=""  />
            </div>
            <textarea 
                name='newTweet'
                value={newTweet}
                onChange={handleForm}
                className='text-area-section__info' 
                autoFocus 
                placeholder='What´s happening?' 
                id="" 
                cols="30" 
                rows="10"
                ></textarea>
        </section>
    </main>
  )
}

export default NewTweet