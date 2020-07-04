import React from "react";
import { Row, Col } from "react-bootstrap";
import Avatar from "react-avatar";

const Home = () => {
  return (
    <>
      <Row>
        <Col xs={6} md={4}>
          <Avatar src="avatar.jpeg" size="200" />
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={4}>
          <label>ristic.aleksandra1990@gmail.com</label>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={4}>
          <a href="https://github.com/risticaleksandra">
            https://github.com/risticaleksandra
          </a>
        </Col>
      </Row>
    </>
  );
};
export default Home;
