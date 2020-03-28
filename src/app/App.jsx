import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Listing from "./listing/Listing";
import { Container, Row, Col } from "react-bootstrap";
import Filter from "./filter/Filter";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <Filter />
        </Col>
        <Col md={8}>
          <Listing />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
