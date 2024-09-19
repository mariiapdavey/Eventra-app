import React from 'react';
import events from '../Events';
import EventList from '../components/EventList';
import { Col, Row } from 'react-bootstrap';

const HomeScreen = () => {
  return (
    <>
        <h1>Latest Events</h1>
        <Row className="g-3">
            {events.map(e => (
                <Col sm={12} md={6} lg={4} xl={3}>
                    <EventList event={e} />
                </Col>
            ))}
        </Row>
    </>
  )
}

export default HomeScreen