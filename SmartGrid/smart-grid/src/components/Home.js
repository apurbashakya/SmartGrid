import React, { useState } from "react";
import Analysis from "./Analysis";
import Community from "./Community";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  /* Define a function that toggles the visibility of the Analysis */
  const [toggledAnalysis, setAnalysis] = useState(true);
  const toggleAnalysis = () => setAnalysis(!toggledAnalysis);
  /* Define a function that toggles the visibility of the Community Button */
  const [toggledCommunity, setCommunity] = useState(false);
  const toggleCommunity = () => setCommunity(!toggledCommunity);
  //Functions to make other options False
  const communityFalse = () => setCommunity(false);
  const analysisFalse = () => setAnalysis(false);

  let Analyse;
  if (toggledAnalysis) {
    Analyse = <Analysis />;
  }

  let communityButton;
  if (toggledCommunity) {
    communityButton = <Community />;
  }

  return (
    <>
      <Container fluid="md">
        <Row className="justify-content-md-center">
          <Col>
            <Button
              onClick={() => {
                toggleAnalysis();
                communityFalse();
              }}
              variant="outline-primary"
            >
              Analysis
            </Button>
          </Col>
          <Col>
            <Button variant="outline-warning">Predictor</Button>
          </Col>
          <Col>
            <Button onClick={() => {
                toggleCommunity();
                analysisFalse();
              }} variant="outline-danger">
              Community
            </Button>
          </Col>
          <Col>
            <Button variant="outline-success">Language</Button>
          </Col>
        </Row>
        <Row>
          {Analyse}
          {communityButton}
        </Row>
      </Container>
    </>
  );
};

export default Home;
