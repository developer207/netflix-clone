import { getApp } from "firebase/app";
import { initializeApp,getApps } from "firebase/app";
import { getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjonJ7xSX5-j1NLoUSZQo5KH6BxLBCejM",
  authDomain: "netflix-clone-by-ashok.firebaseapp.com",
  projectId: "netflix-clone-by-ashok",
  storageBucket: "netflix-clone-by-ashok.appspot.com",
  messagingSenderId: "282188620346",
  appId: "1:282188620346:web:3b1f3119a8f33878204b03"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const auth = getAuth();

export default app
export{db , auth}
//const app = initializeApp(firebaseConfig);