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
        <Col lg={2} md={12} sm={12}>
          <Filter />
        </Col>
        <Col lg={9} md={12}>
          <Listing />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
