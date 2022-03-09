import { useState } from "react";
import { Button } from "bootstrap";
import { Container, Row, Col, Image } from "react-bootstrap";

const Analysis = () => {
  const [day, setDay] = useState(false);

  /* Define a function that toggles the visibility of the Day */
  const Day = () => setDay(!day);

  return (
    <>
      <Container fluid="md">
        <Row className="justify-content-md-center">
          <Col>
            <br></br>
            <Image src={require("../img/Monthly.png")} fluid></Image>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <br></br>
            <Image src={require("../img/Daily.png")} fluid></Image>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <br></br>
            <Image src={require("../img/Yearly.png")} fluid></Image>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Analysis;
