import React from 'react';
import {Container, Row, Col, Form} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';

export default function LandingPage() {
  return (
    <>
      <Container >
        <Row>
          <Col>
          <Card>
        <ListGroup variant="flush">
          <ListGroup.Item>
          <Form.Label htmlFor="basic-url">Slicr URL Shortner</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon3">
           Enter URL to shorten
          </InputGroup.Text>
          <Form.Control id="basic-url" aria-describedby="basic-addon3" />
        </InputGroup>
          </ListGroup.Item>
          <ListGroup.Item>Shortened URL : </ListGroup.Item>
        </ListGroup>
          </Card>
          </Col>

        </Row>

      </Container>
       
    </>
  )
}
