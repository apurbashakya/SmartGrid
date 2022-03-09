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
            <Image src={require("../output.png")} fluid></Image>
          </Col>
          <Col>
            <div>
              {/* <Button>Appliances</Button> */}
            </div>
          </Col>
          {/* <Col>
            <Button variant="outline-warning">Appliances</Button>
          </Col>
          <Col>
            <Button variant="outline-danger">Savings</Button>
          </Col>
          <Col>
            <Button variant="outline-success">Language</Button>
          </Col> */}
        </Row>
        <Row>{/* {toggled && <Analysis></Analysis>} */}</Row>
      </Container>
      {/* <div className="align-self-center">
        <br></br> */}
      {/* <Button onClick={Day} variant="outline-primary">
          Day
        </Button> */}
      {/* <Image src={require("../output.png")} fluid></Image> */}
      {/* </div> */}
    </>
  );
};

export default Analysis;
