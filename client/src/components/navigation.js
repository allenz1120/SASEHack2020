import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";

const navigation = () => {
  return (
    <Navbar>
      <Navbar.Brand href="#home">Tranquil</Navbar.Brand>
      <Navbar.Toggle />

      <Navbar.Collapse className="justify-content-end">
        <Nav.Link href="#home">Journals</Nav.Link>
        <Nav.Link href="#chat">Chat</Nav.Link>
        <Navbar.Text>
          Signed in as: <a href="#login">Mark Otto</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default navigation;
