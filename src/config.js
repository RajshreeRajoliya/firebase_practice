// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from 'firebase/firestore'
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDLoUMblsOxMALMqBt6ScgPqs-QX92afc",
  authDomain: "rajshreefirstproject.firebaseapp.com",
  projectId: "rajshreefirstproject",
  storageBucket: "rajshreefirstproject.appspot.com",
  messagingSenderId: "1016195287458",
  appId: "1:1016195287458:web:74c1121fa15ee489098afb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let auth = getAuth(app);

export let googleAuthen = () =>{
let provider = new GoogleAuthProvider();
return signInWithPopup(auth , provider)
}

export let emailAuth = (email,password) =>{
  console.log(email,password);
  let data = createUserWithEmailAndPassword(auth , email , password)
  return data;
}

export let EmailLogin = (email,password) =>{
  let data=signInWithEmailAndPassword(auth, email, password)
  return data;
}






export let db=getFirestore(app);
