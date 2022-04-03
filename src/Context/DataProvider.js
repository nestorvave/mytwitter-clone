import { useState } from "react";
import { createContext } from "react";

export const DataContext = createContext()


export const DataProvider = ( {children} ) =>{

    const [uiTweets, setUiTweets] =useState([])
    const [status, setStatus] = useState( false )
    const[bookmarks, setBookmarks]=useState([])
    const [user, setUser]= useState({
    uid:"",
    email:"",
    user:""
    })
    const [isDeleting, setIsDeleting] =useState({
        status:false,
        idTweet:"",
        idUser:"",
    })


    return(
        <DataContext.Provider 
            value= {{
                uiTweets,
                setUiTweets,
                user,
                setUser,
                bookmarks, 
                setBookmarks,
                isDeleting,
                setIsDeleting,
                status, 
                setStatus
            }}
        >
            { children }
        </DataContext.Provider>
    )
}