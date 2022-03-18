import { createContext } from "react";

export const DataContext = createContext()


export const DataProvider = ( {children} ) =>{

    useForm


    return(
        <DataContext.Provider>
            { children }
        </DataContext.Provider>
    )
}