import  firebase, { googleProvider } from '../Firebase/firebase'

const loginWithGoogleServices = () => {
    firebase.auth().signInWithPopup( googleProvider )
    .then( result =>{
        console.log( result )
    } )
}

export default loginWithGoogleServices