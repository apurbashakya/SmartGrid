import React, { useState } from "react";
import Analysis from "./Analysis";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  // const homeClick = () => {};
  const [toggled, setToggled] = useState(false);

  /* Define a function that toggles the visibility of the image */
  const toggleImage = () => setToggled(!toggled);

  return (
    <>
      <Container fluid>
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
        {toggled && <Analysis></Analysis>}
        </Row>
      </Container>
    </>
    // <div className="Home">
    //   <h2>DASHBOARD</h2>

    //   <br />
    //   <div>
    //     {<Button onClick={toggleImage} variant="outline-primary">Analysis</Button>}
    //     {<Button onClick={toggleImage} variant="outline-warning">Appliances</Button>}
    //     {<Button onClick={toggleImage} variant="outline-danger">Savings</Button>}
    //     {<Button onClick={toggleImage} variant="outline-success">Language</Button>}
    //   </div>
    //   <div>{toggled && <Analysis></Analysis>}</div>
    // </div>
  );
};

export default Home;
