import React from 'react';
import { Card } from 'react-bootstrap';

const EventList = ({event}) => {
  return (
    <Card className='my-5 p-3 rounded'>
        <Card.Img src={event.image} variant='top' />
        <Card.Body>
            <Card.Title as='div'>
                <strong>{event.eventName}</strong>
            </Card.Title>

            <Card.Text as='div'>
                {event.venue.name}
                < br />
                {event.venue.address}
            </Card.Text>
           
            <Card.Text as='h3'>
                ${event.price}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default EventList