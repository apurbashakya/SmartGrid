import React, { useState } from "react";
import Analysis from "./Analysis";
import Community from "./Community";
import Predictor from "./Predictor";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  /* Define a function that toggles the visibility of the Analysis */
  const [toggledAnalysis, setAnalysis] = useState(true);
  const toggleAnalysis = () => setAnalysis(!toggledAnalysis);
  /* Define a function that toggles the visibility of the Predictor */
  const [toggledPredictor, setPredictor] = useState(false);
  const togglePredictor = () => setPredictor(!toggledPredictor);
  /* Define a function that toggles the visibility of the Community Button */
  const [toggledCommunity, setCommunity] = useState(false);
  const toggleCommunity = () => setCommunity(!toggledCommunity);
  //Functions to make other options False
  const communityFalse = () => setCommunity(false);
  const analysisFalse = () => setAnalysis(false);
  const predictorFalse = () => setPredictor(false);

  let Analyse;
  if (toggledAnalysis) {
    Analyse = <Analysis />;
  }

  let communityButton;
  if (toggledCommunity) {
    communityButton = <Community />;
  }

  let predictorButton;
  if (toggledPredictor) {
    predictorButton = <Predictor />;
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
                predictorFalse();
              }}
              variant="outline-primary"
            >
              Analysis
            </Button>
          </Col>
          <Col>
            <Button
              onClick={() => {
                togglePredictor();
                communityFalse();
                analysisFalse();
              }}
              variant="outline-warning"
            >
              Predictor
            </Button>
          </Col>
          <Col>
            <Button
              onClick={() => {
                toggleCommunity();
                analysisFalse();
                predictorFalse();
              }}
              variant="outline-danger"
            >
              Community
            </Button>
          </Col>
          <Col>
            <Button variant="outline-success">Language</Button>
          </Col>
        </Row>
        <Row>
          {Analyse}
          {predictorButton}
          {communityButton}
        </Row>
      </Container>
    </>
  );
};

export default Home;
