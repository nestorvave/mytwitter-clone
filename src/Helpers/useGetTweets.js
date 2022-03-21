import { useEffect, useState } from "react"
import { db } from "../Firebase/firebase"


const useGetTweets = () => {
    const [gettingTweets, setGettingTweets] = useState([])

    useEffect(()=>{
        db.collection("tweets")
            .onSnapshot ( snapshot =>{
                const tweets=[]
                snapshot.forEach(element => {
                    //creating an object with data
                    const uiInfo = {
                        tweet : element.data().tweet,
                        user:element.data().user,
                        email:element.data().email,
                        uid:element.data().uid,
                        likes:element.data().likes
                    }
                    tweets.push( uiInfo)


                });

                setGettingTweets( tweets )


            } )
            


    },[] )

  return gettingTweets
  
  
}

export default useGetTweets