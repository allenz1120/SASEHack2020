import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

// import { useAuthState } from "react-firebase-hooks/auth";

// firebase.initializeApp({
//   apiKey: "AIzaSyBdolrMC5TKfiER6jYC0vsnyq9wfdOuTgE",
//   authDomain: "sasehacks-3468d.firebaseapp.com",
//   databaseURL: "https://sasehacks-3468d.firebaseio.com",
//   projectId: "sasehacks-3468d",
//   storageBucket: "sasehacks-3468d.appspot.com",
//   messagingSenderId: "513188053690",
//   appId: "1:513188053690:web:523b67a74d0dd1fb95b883",
// });

// const auth = firebase.auth();

const navigation = () => {
  // const [user] = useAuthState(auth);
  return (
    <Navbar>
      <Navbar.Brand href="#home">Tranquil</Navbar.Brand>
      <Navbar.Toggle />

      <Navbar.Collapse className="justify-content-end">
        <Nav.Link href="#home">Journals</Nav.Link>
        <Nav.Link href="#chat">Chat</Nav.Link>
        <Navbar.Text>
          Signed in as: <a href="#login">Jason Kim</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default navigation;
