import React from "react";
import "./App.css";
import Axios from "axios";
import Home from "./components/home";
import "bootstrap/dist/css/bootstrap.min.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBdolrMC5TKfiER6jYC0vsnyq9wfdOuTgE",
  authDomain: "sasehacks-3468d.firebaseapp.com",
  databaseURL: "https://sasehacks-3468d.firebaseio.com",
  projectId: "sasehacks-3468d",
  storageBucket: "sasehacks-3468d.appspot.com",
  messagingSenderId: "513188053690",
  appId: "1:513188053690:web:523b67a74d0dd1fb95b883",
});

const auth = firebase.auth();
// const firestore = firebase.firestore();

function App() {
  Axios({
    method: "GET",
    url: "http://localhost:5000/",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    console.log(res.data.message);
  });

  const [user] = useAuthState(auth);

  return <div className="App">{user ? <Home /> : <SignIn />}</div>;
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}

export default App;
