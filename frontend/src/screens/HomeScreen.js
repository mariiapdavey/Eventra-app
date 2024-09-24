import React, {useEffect, useState} from 'react';
import axios from 'axios'
import EventList from '../components/EventList';
import { Col, Row } from 'react-bootstrap';

const HomeScreen = () => {

  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      const {data} = await axios.get('/api/events')
      setEvents(data)
    }

    fetchEvents()
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