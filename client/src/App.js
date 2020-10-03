import React from "react";
import "./App.css";
import Axios from "axios";
import NavBar from "./components/navigation";
import Jumbo from "./components/jumbotron";
import "bootstrap/dist/css/bootstrap.min.css";

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

  return (
    <div className="App">
      <NavBar />
      <Jumbo />
    </div>
  );
}

export default App;
