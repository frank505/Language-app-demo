
// Import the functions you need from the SDKs you need
import {
  initializeApp,
  FirebaseApp,
  FirebaseOptions
} from "firebase/app";
import {getFirestore,
  Firestore,
  addDoc,
  collection,
   query, 
   orderBy, 
  startAt,
  endAt,
  serverTimestamp,
  FieldValue,
  getDoc,
  getDocs,
  limit } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig:FirebaseOptions = {
  apiKey: "AIzaSyDeIxHJKK6vmSQLUksSKJTcIsJFlJnV4Ys",
  authDomain: "languageapp-346ff.firebaseapp.com",
  projectId: "languageapp-346ff",
  storageBucket: "languageapp-346ff.appspot.com",
  messagingSenderId: "420579061564",
  appId: "1:420579061564:web:84989ea8fa00e40d957839",
  measurementId: "G-Q8TZ98501P"
};


// Initialize Firebase
const fireBaseInit:FirebaseApp =  initializeApp(firebaseConfig);
const db:Firestore = getFirestore();





 
 export  {db,addDoc,collection,fireBaseInit,query,orderBy,startAt,endAt,
  serverTimestamp,FieldValue,getDoc,getDocs,limit};
