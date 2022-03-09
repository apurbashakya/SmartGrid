import React from "react";
import { Row, Col, Image } from "react-bootstrap";

const Monthly = () => {
  return (
    <Row className="justify-content-md-center">
      <Col>
        <br></br>
        <Image src={require("../img/Monthly.png")} fluid></Image>
      </Col>
    </Row>
  );
};

export default Monthly;
