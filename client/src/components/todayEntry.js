import React from "react";

import { useState } from "react";
import Axios from "axios";
import firebase from "firebase/app";
import { firestore, auth } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

function TodayEntry() {
  const messagesRef = firestore.collection("entries");

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid } = auth.currentUser;
    var send;
    Axios({
      method: "GET",
      url: "http://localhost:5000/mood/" + formValue,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      let tones = res.data.document_tone.tones;
      // console.log(tones);
      send = {
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
      };
      // console.log(tones[0]);
      for (var i = 0; i < tones.length; i++) {
        if (tones[i].tone_name === "Joy") {
          send.Joy = tones[i].score;
        } else if (tones[i].tone_name === "Angry") {
          send.Angry = tones[i].score;
        } else if (tones[i].tone_name === "Fear") {
          send.Fear = tones[i].score;
        } else if (tones[i].tone_name === "Sadness") {
          send.Sadness = tones[i].score;
        } else if (tones[i].tone_name === "Analytical") {
          send.Analytical = tones[i].score;
        } else if (tones[i].tone_name === "Confident") {
          send.Confident = tones[i].score;
        } else if (tones[i].tone_name === "Tentative") {
          send.Tentative = tones[i].score;
        }
      }
      messagesRef.add(send);
    });
    // messagesRef.add(send);
    setFormValue("");
  };

  return (
    <form onSubmit={sendMessage}>
      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />

      <button type="submit" disabled={!formValue}>
        Add Entry
      </button>
    </form>
  );
}

// class TodayEntry extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "" };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     // console.log(this.state.value);
//     Axios({
//       method: "GET",
//       url: "http://localhost:5000/mood/" + this.state.value,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }).then((res) => {
//       // console.log(res.data.document_tone.tones);

//     });
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           <input
//             type="text"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import React from "react";
// import "./../styles/todayEntry.scss";

// const TodayEntry = () => {
//   return (
//     <Container>
//       <Form className="form-box">
//         <Form.Group controlId="exampleForm.ControlTextarea1">
//           <Form.Label>Today's Entry</Form.Label>
//           <Form.Control as="textarea" rows="3" />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </Container>
//   );
// };

export default TodayEntry;
