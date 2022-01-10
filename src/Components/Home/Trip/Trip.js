import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Trip = () => {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateTime = today.toLocaleDateString("en-US", options)

    const trips = [
        { title: 'Journeys Are Best Measured In New Friends', time: dateTime, img: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
        { title: 'Journeys Are Best Measured In New Friends', time: dateTime, img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
        { title: 'Journeys Are Best Measured In New Friends', time: dateTime, img: 'https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
        { title: 'Journeys Are Best Measured In New Friends', time: dateTime, img: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
        { title: 'Journeys Are Best Measured In New Friends', time: dateTime, img: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
        { title: 'Journeys Are Best Measured In New Friends', time: dateTime, img: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' },
        { title: 'Journeys Are Best Measured In New Friends', time: dateTime, img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3dpdHplcmxhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' },
        { title: 'Journeys Are Best Measured In New Friends', time: dateTime, img: 'https://images.unsplash.com/photo-1594069758873-e79e9075eb7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3dpdHplcmxhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' },
    ]
    return (
        <div className='container mt-3 pb-5'>
            <h3 className='mb-5 text-center'>Recent Trips</h3>
            <Row xs={1} md={4} className="g-4">
                {trips.map((x) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={x.img} />
                            <Card.Body>
                                <Card.Title>{x.title}</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural.
                                </Card.Text>
                                <Card.Text>{x.time}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Trip;