/**
 * Firebase
 */
import { db } from "../Firebase/firebase";


/**
 *
 * @description "fn for add new tweet to firestore db "
 * @param {*New tweet created with requires information} newTweetByUser
 * 
 */

const useUpdateDb = ( newTweetByUser) => {
  // Adding a new document with a generated id.
  const sendTweet = db.collection("tweets").add(newTweetByUser);
  sendTweet
    .then((docRef) => docRef.get())
    .catch((err) => {
      console.warn("Error adding document: ", err);
    });
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


};

export default useUpdateDb;
