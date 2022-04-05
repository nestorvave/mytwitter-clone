/**
 * Dependencies
 */
import { useState, createContext } from "react";


export const DataContext = createContext()


export const DataProvider = ( {children} ) =>{

    const [status, setStatus] = useState( false )
    const [loading, setLoading] = useState( true )
    const [uiTweets, setUiTweets] =useState([])
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
                setStatus,
                loading, 
                setLoading
            }}
        >
            { children }
        </DataContext.Provider>
    )
}