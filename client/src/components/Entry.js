import React from "react";
import { Doughnut } from "react-chartjs-2";
import { auth } from "../firebase";
import ListGroup from "react-bootstrap/ListGroup";
// import ListGroupItem from "react-bootstrap/ListGroupItem";

import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";

function Entry(props) {
  const {
    prompt,
    uid,
    text,
    Joy,
    Angry,
    Fear,
    Sadness,
    Analytical,
    Confident,
    Tentative,
  } = props.entry;
  const [user] = useAuthState(auth);

  return (
    <div>
      {user.uid === uid ? (
        <ListGroup.Item style={{ padding: ".5rem" }}>
          <h3 style={{ textAlign: "left" }}>{prompt}</h3>
          <p style={{ textAlign: "left" }}>{text}</p>
          <div style={{ display: "flex" }}>
            {Joy ? (
              <div style={{ width: "14rem" }}>
                <Doughnut
                  data={{
                    datasets: [
                      {
                        data: [Joy, 100 - Joy],
                        backgroundColor: ["#34eb6e", "white"],
                      },
                    ],
                  }}
                />
                <p>Joy</p>
              </div>
            ) : (
              <div />
            )}
            {Angry ? (
              <div style={{ width: "14rem" }}>
                <Doughnut
                  data={{
                    datasets: [
                      {
                        data: [Angry, 100 - Angry],
                        backgroundColor: ["#eb3434", "white"],
                      },
                    ],
                  }}
                />
                <p>Angry</p>
              </div>
            ) : (
              <div />
            )}
            {Fear ? (
              <div style={{ width: "14rem" }}>
                <Doughnut
                  data={{
                    datasets: [
                      {
                        data: [Fear, 100 - Fear],
                        backgroundColor: ["black", "white"],
                      },
                    ],
                  }}
                />
                <p>Fear</p>
              </div>
            ) : (
              <div />
            )}
            {Sadness ? (
              <div style={{ width: "14rem" }}>
                <Doughnut
                  data={{
                    datasets: [
                      {
                        data: [Sadness, 100 - Sadness],
                        backgroundColor: ["#6857ff", "white"],
                      },
                    ],
                  }}
                />
                <p>Sadness</p>
              </div>
            ) : (
              <div />
            )}
            {Analytical ? (
              <div style={{ width: "14rem" }}>
                <Doughnut
                  data={{
                    datasets: [
                      {
                        data: [Analytical, 100 - Analytical],
                        backgroundColor: ["#ebff57", "white"],
                      },
                    ],
                  }}
                />
                <p>Analytical</p>
              </div>
            ) : (
              <div />
            )}
            {Confident ? (
              <div style={{ width: "14rem" }}>
                <Doughnut
                  data={{
                    datasets: [
                      {
                        data: [Confident, 100 - Confident],
                        backgroundColor: ["#d257ff", "white"],
                      },
                    ],
                  }}
                />
                <p>Confident</p>
              </div>
            ) : (
              <div />
            )}
            {Tentative ? (
              <div style={{ width: "14rem" }}>
                <Doughnut
                  data={{
                    datasets: [
                      {
                        data: [Tentative, 100 - Tentative],
                        backgroundColor: ["#ffbc57", "white"],
                      },
                    ],
                  }}
                />
                <p>Tentative</p>
              </div>
            ) : (
              <div />
            )}
          </div>
        </ListGroup.Item>
      ) : (
        <div />
      )}
    </div>
  );
}

export default Entry;
