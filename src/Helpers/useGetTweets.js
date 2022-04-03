import { useEffect, useState } from "react"
import { db } from "../Firebase/firebase"


const useGetTweets = () => {
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


                });

                setGettingTweets( tweets )


            } )
            
        return unsuscribe

    },[] )

  return gettingTweets
  
  
}

export default useGetTweets