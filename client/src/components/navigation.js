import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import Button from "react-bootstrap/Button";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./../styles/navigation.scss";

const Navigation = () => {
  const [user] = useAuthState(auth);

  return (
    <Navbar>
      <Navbar.Brand href="#home" className="company">
        Tranquility
      </Navbar.Brand>
      <Navbar.Toggle />

      <Navbar.Collapse className="justify-content-end">
        {/* <Nav.Link className="navbar-text" href="#home">
          Journals
        </Nav.Link>
        <Nav.Link className="navbar-text" href="#chat">
          Chat
        </Nav.Link> */}
        <Button
          className="sign-out"
          variant="light"
          onClick={() => auth.signOut()}
        >
          Sign Out
        </Button>
        {/* &nbsp;
        <Navbar.Text>Signed in as: {user.displayName}</Navbar.Text> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
