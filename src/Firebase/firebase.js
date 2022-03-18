import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJnQoqtiRecqeo8rxH1juHmglA5FHh6t4",
  authDomain: "twitter-clone-1bf84.firebaseapp.com",
  projectId: "twitter-clone-1bf84",
  storageBucket: "twitter-clone-1bf84.appspot.com",
  messagingSenderId: "208523940793",
  appId: "1:208523940793:web:7308373d278f39e79d5c68",
};

//Initializing Firebase
firebase.initializeApp( firebaseConfig )

//Exporting dataBase from firestore
export const db = firebase.firestore();

export default firebase;
