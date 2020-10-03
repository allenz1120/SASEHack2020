import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import "./../styles/jumbotron.scss";
import React from "react";

const Jumbo = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>
          “Peace is a daily, a weekly, a monthly process, gradually changing
          opinions, slowly eroding old barriers, quietly building new
          structures.” —John F. Kennedy
        </h1>
      </Container>
    </Jumbotron>
  );
};

export default Jumbo;
