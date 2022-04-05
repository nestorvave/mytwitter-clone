/**
 * Firebase
 */

import  firebase, { googleProvider } from '../Firebase/firebase'

/**
 *
 * @description "fn for login through Google with PopUp "
 * @param 
 * @param 
 */

const loginWithGoogleServices = () => {
    firebase.auth().signInWithPopup( googleProvider )
    .then( result =>{
        console.log( result )
    } )
}

export default loginWithGoogleServices