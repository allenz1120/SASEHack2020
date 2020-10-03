import React from "react";
import NavBar from "./navigation";
import Jumbo from "./jumbotron";
import TodayEntry from "./todayEntry";
import OldEntry from "./OldEntry";
import BarChart from "./BarChart";
import "./../styles/home.scss";

const Home = () => {
  return (
    <div className="App">
      <div className="header">
        <NavBar />
        <Jumbo />
      </div>
      <TodayEntry />
      <OldEntry />
      <BarChart />
    </div>
  );
};

export default Home;
