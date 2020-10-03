import React from "react";
import "./App.css";
import Axios from "axios";
import Home from "./components/home";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase/app";
import { auth } from "./firebase";
import Button from "react-bootstrap/Button";

import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";

function App() {
  // Axios({
  //   method: "GET",
  //   url: "http://localhost:5000/",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // }).then((res) => {
  //   console.log(res.data.message);
  // });

  const [user] = useAuthState(auth);

  return <div className="App">{user ? <Home /> : <SignIn />}</div>;
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  let child = {
    maxWidth: "20rem",
    background: "#eee",
    padding: "1rem",
    borderRadius: "2rem",
    position: "absolute",
    left: "50%",
    top: "40%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <div style={child}>
        <h2>Welcome To Tranquility</h2>
        <br />
        <Button onClick={signInWithGoogle}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default App;
