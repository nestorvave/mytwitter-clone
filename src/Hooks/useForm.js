import { useState } from "react"

const useForm = (initialState={}) => {

    const [values,setValues]  = useState(initialState);

    function handleForm( { target } ) {
        setValues({
            ...values,
            [target.name]: target.value
        })
        
    }

    

  return [values,handleForm,setValues]
   
}
export default useForm;
