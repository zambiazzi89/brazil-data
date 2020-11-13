import React from 'react'
import BrazilMap from './BrazilMap'
import { Container, Row, Col, ProgressBar } from 'react-bootstrap'
import DataList from './DataList'

const Main = () => {
  const now = 30
  const progressInstance = <ProgressBar now={now} label={`${now}%`} />

  return (
    <Container className="bg-light p-0" fluid>
      <Row>
        <Col xs={11} md={8} className="mx-auto p-3 bg-dark">
          <Col md={11} lg={7} className="p-5 bg-light">
            <BrazilMap />
          </Col>
          {progressInstance}
        </Col>
        <Col>
          <DataList xs={1} md={4} />
        </Col>
      </Row>
    </Container>
  )
}

export default Main
