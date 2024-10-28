import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {Row, Col, Image, Card, Button, ListGroup, Form} from 'react-bootstrap';
import { listEventDetails } from '../actions/eventActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const EventScreen = () => {
  const [qty, setQty] = useState(1);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();  

const eventDetails = useSelector((state) => state.eventDetails)
const {loading, event, error} = eventDetails

useEffect(() => {
  dispatch(listEventDetails(params.id))
}, [dispatch, params.id, event.countInStock])

//update quantity when event changes
useEffect(() => {
  if (event && event.countInStock) {
    setQty(1)
  }
}, [event])

const addToCartHandler = () => {
  navigate(`/cart/${params.id}?qty=${qty}`)
}

  return (
    <>
    <Link className ='btn btn-secondary text-dark my-3' to='/'>
      Go Back
    </Link>
    {
      loading ? (<Loader />)
      :error? (<Message variant='danger'>{error}</Message>) :
      (
        <>
        <Row>
          <Image src={event.image} 
          alt={event.eventName} 
          fluid 
          className="event-image"   //added class for CSS styling
          />
        </Row>
        <Row className="mt-2 align-items-stretch"> 
          
          <Col md={8}>
            <ListGroup variant='flush' className="h-100 d-flex flex-column">        
                <ListGroup.Item>
                    <h3>{event.eventName}</h3>
                </ListGroup.Item>
                <ListGroup.Item className="flex-grow-1">
                  <h5><strong>About this event:</strong></h5>
                  <br/>
                  {event.description}  
                </ListGroup.Item>

              </ListGroup>
          </Col>
          <Col md={4} className="h-100">
            
            <ListGroup variant='flush'>
                <ListGroup.Item> <strong>When:</strong> {event.date} </ListGroup.Item>
                <ListGroup.Item> <strong>Time:</strong> {event.time} </ListGroup.Item>
                <ListGroup.Item><strong>Venue:</strong> {event.venue?.name || 'Venue not available'} </ListGroup.Item>
                <ListGroup.Item><strong>Address:</strong> {event.venue?.address || 'Address not available'} </ListGroup.Item>
          
                <Card className="card-price h-100 d-flex flex-column justify-content-between"> 
                  <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row className="text-primary-emphasis">
                            <Col> Price:</Col>
                            <Col>
                                <strong>${event.price}</strong>
                            </Col>
                        </Row>
                        <Row>
                          <Col>Status:</Col>
                          <Col>
                            {event.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                    </Col>
                  </Row>
                    </ListGroup.Item>
                    {event.countInStock > 0 && (
                      <ListGroup.Item>
                          <Row>
                            <Col>Qty</Col>
                            <Col>
                              <Form.Control
                                as='select'
                                value={qty}
                                onChange={e => setQty(Number(e.target.value))}
                                >
                                {
                                  [...Array(event.countInStock).keys()].map(x => (
                                    <option key={x+1} value={x+1}>{x+1}</option> 
                                  ))
                                }
                              </Form.Control>
                            </Col>
                          </Row>
                      </ListGroup.Item>
                    )}

                    <ListGroup.Item className="mt-auto">
                      <Button
                          className ='btn-block'
                          type='button'
                          onClick={addToCartHandler}
                          disabled={event.countInStock === 0}
                      >
                          Add to Cart
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
    </>
  );
};

export default EventScreen