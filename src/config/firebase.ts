
// Import the functions you need from the SDKs you need
import {
  initializeApp,
  FirebaseApp,
  FirebaseOptions
} from "firebase/app";
import {
  getFirestore,
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
  QuerySnapshot,
   startAfter,
  limit } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig:FirebaseOptions = {
  apiKey: "xxxx",
  authDomain: "xxx",
  projectId: "xxxxx",
  storageBucket: "xxx",
  messagingSenderId: "xxx",
  appId: "xxx",
  measurementId: "xxx"
};


// Initialize Firebase
const fireBaseInit:FirebaseApp =  initializeApp(firebaseConfig);
const db:Firestore = getFirestore();





 
 export  {db,addDoc,collection,fireBaseInit,query,orderBy,startAt,endAt,
  serverTimestamp,FieldValue,getDoc,getDocs,limit,  QuerySnapshot, startAfter};
