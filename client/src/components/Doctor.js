import React from "react";
import { useState } from "react";
import Axios from "axios";
import firebase from "firebase/app";
import { firestore, auth } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import DoctorEntry from "./DoctorEntry";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import validator from "validator";

function Doctor(prompt) {
  const messagesRef = firestore.collection("entries");
  const tipsRef = firestore.collection("tips");

  const [formValue, setFormValue] = useState("");
  const [formEmail, setEmailValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid } = auth.currentUser;
    var send;
    // console.log(tones);
    send = {
      text: formValue,
      email: formEmail,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
    };
    await tipsRef.add(send);

    // messagesRef.add(send);
    setFormValue("");
    setEmailValue("");
  };

  const entriesRef = firestore.collection("entries");
  // .where("uid", "==", user.uid);
  // console.log(entriesRef);
  const query = entriesRef.orderBy("createdAt");
  const [entries] = useCollectionData(query, { idField: "id" });

  return (
    <Container>
      <div>
        {entries &&
          entries.reverse().map((entry) => {
            console.log(entry);
            return <DoctorEntry key={entry.id} entry={entry} />;
          })}
      </div>
      <form onSubmit={sendMessage} style={{ padding: "1rem" }}>
        <h5>E-mail</h5>
        <input
          style={{ width: "90%", marginBottom: ".5rem" }}
          value={formEmail}
          onChange={(e) => setEmailValue(e.target.value)}
        />
        <h5>Your Message</h5>
        <textarea
          style={{ width: "90%", height: "15rem" }}
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />

        <br />
        <Button type="submit" disabled={!formValue}>
          Add Entry
        </Button>
      </form>
    </Container>
  );
}

export default Doctor;
