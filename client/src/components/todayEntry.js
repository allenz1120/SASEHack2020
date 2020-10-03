import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import React from "react";

const TodayEntry = () => {
  return (
    <Container>
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Today's Entry</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default TodayEntry;
