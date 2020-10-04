import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import React, { useState } from "react";
import TodayEntry from "./todayEntry";
import Entry from "./Entry";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { auth, firestore } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

const prompts = [
  "When did you feel happiest today?",
  "Reflect on how you have changed since 5 years ago.",
  "What is something that has impacted positively on your life?",
  "How was your day?",
  "What scares you?",
  "List the things you need/want to achieve in the next week.",
  "What makes you uniquely you?",
  "What excites you about the future?",
  "What do you wish others knew about you?",
  "The most important things in my life are …",
  "Write about something you have never told anyone about before.",
  "What does it mean to live an authentic life?",
  "What is something you would love to learn how to do?",
  "My favourite way to spend the day is …",
  "What brings you joy?",
];

let chosenPrompt = prompts[Math.floor(Math.random() * prompts.length)];

function OldEntry() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [user] = useAuthState(auth);
  // console.log(user.uid);
  const entriesRef = firestore.collection("entries");
  // .where("uid", "==", user.uid);
  // console.log(entriesRef);
  const query = entriesRef.orderBy("createdAt");
  const [entries] = useCollectionData(query, { idField: "id" });

  return (
    <div>
      <Container style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Entries</h2>
        <Button variant="primary" onClick={handleShow}>
          Add New Entry
        </Button>
      </Container>

      <Container style={{ marginTop: "1rem" }}>
        {entries &&
          entries.reverse().map((entry) => {
            console.log(entry);
            return <Entry key={entry.id} entry={entry} />;
          })}
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{chosenPrompt}</Modal.Title>
        </Modal.Header>
        <TodayEntry prompt={chosenPrompt} />
      </Modal>
    </div>
  );
}

export default OldEntry;
