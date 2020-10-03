import React from "react";
import NavBar from "./navigation";
import Jumbo from "./jumbotron";
import TodayEntry from "./todayEntry";
import OldEntry from "./OldEntry";
import BarChart from "./BarChart";

const Home = () => {
  return (
    <div className="App">
      <NavBar />
      <Jumbo />
      <TodayEntry />
      <OldEntry />
      <BarChart />
    </div>
  );
};

export default Home;
