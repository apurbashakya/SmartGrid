import React from "react";
import { Row, Col, Image } from "react-bootstrap";

const Daily = () => {
  return (
    <Row className="justify-content-md-center">
      <Col>
        <br></br>
        <Image src={require("../img/Daily.png")} fluid></Image>
      </Col>
    </Row>
  );
};

export default Daily;
