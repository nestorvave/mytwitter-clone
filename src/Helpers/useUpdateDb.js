import { db } from '../Firebase/firebase'


const useUpdateDb = ( uiTweets, setUiTweets, newTweetByUser ) => {

    // Adding a new document with a generated id.
    const sendTweet= db.collection('tweets').add(newTweetByUser)
    const getDocument = sendTweet
        .then( docRef => docRef.get() )
        .catch((err) => {
            console.warn("Error adding document: ", err);
        })
    // getDocument.then( doc =>{
    //     console.log(doc.data() )
    //     const newTweet = {
    //         tweet:doc.data().tweet,
    //         id:doc.data().uid,
    //         likes:doc.data().likes,
        
            
    //     }
    //     setUiTweets([
    //         ...uiTweets,
    //         newTweet
    //     ])
    //     console.log(uiTweets)

    // })


  return uiTweets

}

export default useUpdateDb