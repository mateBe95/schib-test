import React from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Listing from './listing/Listing';
import {Container, Row, Col} from 'react-bootstrap'

function App() {
  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col sm={5}>
        <Listing/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;