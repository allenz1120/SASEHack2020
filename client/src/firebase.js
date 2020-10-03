import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBdolrMC5TKfiER6jYC0vsnyq9wfdOuTgE",
  authDomain: "sasehacks-3468d.firebaseapp.com",
  databaseURL: "https://sasehacks-3468d.firebaseio.com",
  projectId: "sasehacks-3468d",
  storageBucket: "sasehacks-3468d.appspot.com",
  messagingSenderId: "513188053690",
  appId: "1:513188053690:web:523b67a74d0dd1fb95b883",
});

export default firebase;

export const auth = firebase.auth();
export const firestore = firebase.firestore();
