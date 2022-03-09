import { useState } from "react";
import { Button } from "bootstrap";
import { Container, Row, Col, Image } from "react-bootstrap";

const Analysis = () => {
  const [day, setDay] = useState(false);

  /* Define a function that toggles the visibility of the image */
  const Day = () => setDay(!day);

  return (
    <>
      <Container fluid="md">
        <Row className="justify-content-md-center">
          <Col>
            <br></br>
            <Image src={require("../img/output.png")} fluid></Image>
          </Col>
          <Col>
            <br></br>
            <Image src={require("../img/Day.png")} fluid></Image>
          </Col>
        </Row>
        <Row>
            {/* <Button></Button> */}
        </Row>
      </Container>
    </>
  );
};

export default Analysis;
