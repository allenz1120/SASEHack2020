import React from "react";
import NavBar from "./navigation";
import Jumbo from "./jumbotron";
// import TodayEntry from "./todayEntry";
import OldEntry from "./OldEntry";
// import BarChart from "./BarChart";
import Doctor from "./Doctor";
import "./../styles/home.scss";
import Container from "react-bootstrap/Container";

import { auth, firestore } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

const Home = () => {
  const [user] = useAuthState(auth);

  const tipsRef = firestore.collection("tips");
  // .where("uid", "==", user.uid);
  // console.log(entriesRef);
  const [tips] = useCollectionData(tipsRef, { idField: "id" });

  return (
    <div className="App">
      {!(
        user.uid === "el3E1AITINNRCogJkZrlRMlUGz33" ||
        user.uid === "sp23SZzM29NnkDAG5CaHlWGYNvH3"
      ) ? (
        <div>
          <div className="header">
            <NavBar />
            <Jumbo />
          </div>
          <OldEntry />
          <br />
          <Container>
            <h2 style={{ textAlign: "left" }}>Tips From Your Doctor</h2>
            {tips &&
              tips.reverse().map((tip) => {
                // console.log(entry);
                if (tip.email === user.email) {
                  return (
                    <li style={{ textAlign: "left", fontSize: "1.5rem" }}>
                      {tip.text}
                    </li>
                  );
                }
              })}
            <br />
          </Container>
          {/* <BarChart /> */}
        </div>
      ) : (
        <div>
          <div className="header">
            <NavBar />
            <Jumbo />
          </div>
          <Doctor />
        </div>
      )}
    </div>
  );
};

export default Home;
