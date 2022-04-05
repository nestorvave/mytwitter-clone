/**
 * Firebase
 */
import firebase from '../Firebase/firebase'


/**
 *
 * @description "Register new user with email and password"
 * @param {*email typed on the RegisterScreen by user} email
 * @param {*password typed on the RegisterScreen by user} password
 */

const registerEmailPassword = (email,password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then (userCredential =>{
            console.log(userCredential)
            console.log(userCredential.user.uid)
           
        } )
        
        .catch (err => {
            console.error(err.message)
            console.error(err.message)
        })
    
   
}

export default registerEmailPassword