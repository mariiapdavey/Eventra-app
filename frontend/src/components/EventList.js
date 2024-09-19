import React from 'react';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const EventList = ({event}) => {
  return (
    <Card className='my-1 p-3 rounded cards'>
        <Link to={`/event/${event._id}`}>
          <Card.Img src={event.image} variant='top' />
        </Link>
        <Card.Body>
          <Link to={`/event/${event._id}`} className="event-link">
            <Card.Title as='div'>
                <strong>{event.eventName}</strong>
            </Card.Title>
          </Link>
            <Card.Text as='div'>
                {event.venue.name}
            </Card.Text>
           
            <Card.Text as='h3'>
                ${event.price}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default EventList