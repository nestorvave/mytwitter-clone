/**
 * Firebase
 */

import firebase from '../Firebase/firebase'


/**
 *
 * @description "fn for login through  Email and password "
 * @param {*email typed on LoginScreen by user } email
 * @param {*password typed on LoginScreen by user} password
 */


const loginEmailPassword = ( email, password ) => {

    firebase.auth().signInWithEmailAndPassword( email, password )
        .then ( userCredential =>{
            console.log( userCredential )
        } )
        .catch( err => {
            console.log( err.code )
            console.log( err.message )
        } )
    
}

export default loginEmailPassword