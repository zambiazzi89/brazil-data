import React, { useState, useEffect } from 'react'
import { Accordion, Button, Card, Col, Container, Row } from 'react-bootstrap'
import {
  FaBook,
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
  FaVoteYea,
} from 'react-icons/fa'

const DataList = () => {
  const [barToggle, setBarToggle] = useState(true)

  return (
    <Container
      style={{ height: '100%', width: '100%' }}
      fluid
      xs={1}
      sm="auto"
      className="bg-dark p-0"
    >
      <Row style={{ height: '100%' }}>
        <Col sm={1}>
          <Button style={{ height: '100%' }}>
            {barToggle ? <FaChevronLeft /> : <FaChevronRight />}
          </Button>
        </Col>
        <Col sm={0}>
          <Accordion variant="dark" defaultActiveKey="">
            <Card>
              <Accordion.Toggle as={Button} eventKey="0">
                <FaBook /> Educação
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <FaHeart /> Saúde
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <FaVoteYea /> Política
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </Container>
  )
}

export default DataList
