// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { FirebaseApp } from 'firebase/app';
import { FirebaseSignInProvider } from '@firebase/util';

// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD4vQF1bipsvI40AsgTg3T7_QyqRdm0Uww",
  authDomain: "view-den-6059a.firebaseapp.com",
  projectId: "view-den-6059a",
  storageBucket: "view-den-6059a.appspot.com",
  messagingSenderId: "392083160141",
  appId: "1:392083160141:web:402837bc574f9ec589f004",
  measurementId: "G-Q31Y38H5LG"
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { auth, provider };
export default db;

