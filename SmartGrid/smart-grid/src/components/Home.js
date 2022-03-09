import React, { useState } from "react";
import Analysis from "./Analysis";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  const [toggled, setToggled] = useState(false);

  /* Define a function that toggles the visibility of the image */
  const toggleImage = () => setToggled(!toggled);
  let button;
  if(toggled) {
    button = <Analysis />;
  }

  return (
    <>
      <Container fluid="md">
        <Row className="justify-content-md-center">
          <Col>
            <Button onClick={toggleImage} variant="outline-primary">
              Analysis
            </Button>
          </Col>
          <Col>
            <Button variant="outline-warning">
              Appliances
            </Button>
          </Col>
          <Col>
            <Button variant="outline-danger">
              Savings
            </Button>
          </Col>
          <Col>
            <Button  variant="outline-success">
              Language
            </Button>
          </Col>
        </Row>
        <Row>
        {button}
        </Row>
      </Container>
    </>
  );
};

export default Home;
