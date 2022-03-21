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


    return(
        <DataContext.Provider 
            value= {{
                uiTweets,
                setUiTweets,
                user,
                setUser
            }}
        >
            { children }
        </DataContext.Provider>
    )
}