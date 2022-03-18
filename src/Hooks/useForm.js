import { useState } from "react"

const useForm = (initialState={}) => {

    const [values,setValues]  = useState(initialState);

    function handleForm( { target } ) {

        setValues({
            ...setValues,
            [target.name]: target.value
        })
        
    }

    

  return [values,setValues,handleForm]
   
}
