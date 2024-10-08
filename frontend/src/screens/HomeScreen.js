import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import EventList from '../components/EventList';
import { listEvents } from '../actions/eventActions';


const HomeScreen = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listEvents())
  })

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