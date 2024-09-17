import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {Row, Col, Image, Card, Button, ListGroup} from 'react-bootstrap';
import events from '../Events';


const EventScreen = () => {
  const params = useParams();
  const event = events.find(e => e._id === params.id)

  return (
    <>
    <Link className ='btn btn-light my-3' to='/'>
      Go Back
    </Link>
    <Row>
      <Image src={event.image} 
      alt={event.eventName} 
      fluid
      />
    </Row>
    <Row>
      
      <Col md={8}>
        <ListGroup variant='flush'>        
            <ListGroup.Item>
                <h3>{event.eventName}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5><strong>About this event:</strong></h5>
              <br/>
              {event.description}  
            </ListGroup.Item>

          </ListGroup>
      </Col>
      <Col md={4}>
        
        <ListGroup variant='flush'>
            <ListGroup.Item> <strong>When:</strong> {event.date} </ListGroup.Item>
            <ListGroup.Item> <strong>Time:</strong> {event.time} </ListGroup.Item>
            <ListGroup.Item><strong>Venue:</strong> {event.venue.name} </ListGroup.Item>
            <ListGroup.Item><strong>Address:</strong> {event.venue.address} </ListGroup.Item>

            <Card> 
              <ListGroup variant='flush'>
                <ListGroup.Item>
                    <Row>
                        <Col> Price:</Col>
                        <Col>
                            <strong>${event.price}</strong>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                      className ='btn-block'
                      type='button'
                  >
                      Add To Card
                  </Button>
              </ListGroup.Item>
              </ListGroup>
            </Card>
        </ListGroup>
      </Col>
    </Row>
    </>
  )
}

export default EventScreen