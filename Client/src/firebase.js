// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAA9dmIBYG0m-oOpV48Z4TYosNNzDCQM9k",
  authDomain: "electrogate-homeservice.firebaseapp.com",
  projectId: "electrogate-homeservice",
  storageBucket: "electrogate-homeservice.appspot.com",
  messagingSenderId: "581069730371",
  appId: "1:581069730371:web:8da5e2246ca70f1a891af6",
  measurementId: "G-QGTVKLGLBZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
