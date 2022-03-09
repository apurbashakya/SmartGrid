import React from "react";
import { Row, Col, Image } from "react-bootstrap";

const Annually = () => {
  return (
    <Row className="justify-content-md-center">
      <Col xs={12} sm={12} md={4}>
        <Image src={require("../img/Yearly.png")} fluid></Image>
      </Col>
    </Row>
  );
};

export default Annually;
