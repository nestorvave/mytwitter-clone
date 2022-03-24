import { useState } from "react";
import { createContext } from "react";

export const DataContext = createContext()


export const DataProvider = ( {children} ) =>{

    const [uiTweets, setUiTweets] =useState([])
    const [user, setUser]= useState({
        uid:"",
        email:"",
        user:""
    })
    const[bookmarks, setBookmarks]=useState([])


    return(
        <DataContext.Provider 
            value= {{
                uiTweets,
                setUiTweets,
                user,
                setUser,
                bookmarks, 
                setBookmarks
            }}
        >
            { children }
        </DataContext.Provider>
    )
}