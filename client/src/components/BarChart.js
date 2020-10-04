import React from "react";
import { Bar } from "react-chartjs-2";
import Container from "react-bootstrap/Container";
import "./../styles/barchart.scss";
// import Entry from "./Entry";

import { auth, firestore } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

let dataset = [0, 0, 0, 0, 0, 0, 0];
let counter = 0;

const ChartsPage = () => {
  // import { Container } from "react-bootstrap";
  const [user] = useAuthState(auth);
  // console.log(user.uid);
  const entriesRef = firestore.collection("entries");
  const query = entriesRef.orderBy("createdAt");
  const [entries] = useCollectionData(query, { idField: "id" });

  {
    entries &&
      entries.reverse().map((entry) => {
        if (user.uid === entry.uid) {
          // console.log("HEREEE", entry);
          if (entry.Anger) {
            dataset[0] += entry.Anger;
          }
          if (entry.Fear) {
            dataset[1] += entry.Fear;
          }
          if (entry.Joy) {
            dataset[2] += entry.Joy;
          }
          if (entry.Sadness) {
            dataset[3] += entry.Sadness;
          }
          if (entry.Analytical) {
            dataset[4] += entry.Analytical;
          }
          if (entry.Confident) {
            dataset[5] += entry.Confident;
          }
          if (entry.Tentative) {
            dataset[6] += entry.Tentative;
          }
          counter++;
          // console.log(
          //   dataset.map((x) => Math.floor(x / counter)),
          //   " and counter is ",
          //   counter
          // );
        }
      });
  }
  let state = {
    dataBar: {
      labels: [
        "Anger",
        "Fear",
        "Joy",
        "Sadness",
        "Analytical",
        "Confident",
        "Tentative",
      ],
      datasets: [
        {
          label: "Emotions",
          data: dataset,
          backgroundColor: [
            "rgba(255, 134,159,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(255, 218, 128,0.4)",
            "rgba(113, 205, 205,0.4)",
            "rgba(170, 128, 252,0.4)",
            "rgba(255, 177, 101,0.4)",
            "rgba(255, 177, 101,0.4)",
          ],
          borderWidth: 2,
          borderColor: [
            "rgba(255, 134, 159, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(255, 218, 128, 1)",
            "rgba(113, 205, 205, 1)",
            "rgba(170, 128, 252, 1)",
            "rgba(255, 177, 101, 1)",
            "rgba(255, 177, 101, 1)",
          ],
        },
      ],
    },
    barChartOptions: {
      responsive: false,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            barPercentage: 1,
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)",
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)",
            },
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  };

  return (
    <Container>
      <h3 className="mt-5">Two Weeks Average</h3>
      <Bar
        className="barChart"
        data={state.dataBar}
        options={state.barChartOptions}
        width={1110}
        height={420}
      />
    </Container>
  );
};

export default ChartsPage;
