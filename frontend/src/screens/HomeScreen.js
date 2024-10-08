import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import EventList from '../components/EventList';
import { listEvents } from '../actions/eventActions';
import Message from '../components/Message';
import Loader from '../components/Loader';


const HomeScreen = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listEvents())
  }, [dispatch])

  const eventList = useSelector((state) => state.eventList)
  const {loading, events, error} = eventList

  return (
    <>
        <h1>Latest Events</h1>
        {
          loading ? (<Loader />) :
          error ? (<Message variant='danger'>{error}</Message>) :
          (<Row className="g-3">
            {events.map(e => (
                <Col sm={12} md={6} lg={4} xl={3}>
                    <EventList event={e} />
                </Col>
            ))}
        </Row>)
        }
    </>
  )
}

export default HomeScreen