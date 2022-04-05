/**
 * Dependencies
 */
import { useEffect, useState } from "react"
/**
 * Firebase
 */
import { db } from "../Firebase/firebase"



/**
 *
 * @description "fn for getData/ Tweets from firestore"
 * @param {*loader state for set in false when API call is solved} setLoading
 * @return {*return an Array with Tweets from API call}  gettingTweets
 */

const useGetTweets = (setLoading) => {
    const [gettingTweets, setGettingTweets] = useState([])

    useEffect(()=>{
        const unsuscribe=db.collection("tweets")
            .orderBy("date")
            .onSnapshot ( snapshot =>{
                const tweets=[]
                snapshot.forEach(element => {
                    //creating an object with data
                    const uiInfo = {
                        tweet : element.data().tweet,
                        user:element.data().user,
                        email:element.data().email,
                        uid:element.data().uid,
                        likes:element.data().likes,
                        profilePhoto:element.data().profilePhoto,
                        date:element.data().date,
                        id:element.id
                    }
                    tweets.unshift( uiInfo)
                    setLoading(false)


                });

                setGettingTweets( tweets )


            } )
            
        return unsuscribe

    },[] )

  return gettingTweets
  
  
}

export default useGetTweets