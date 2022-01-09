import React from 'react';
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import UseAuthContextAPI from '../../../Hooks/UseAuthContextAPI';
import './PupolerPlace.css'

const PupolerPlace = () => {
    const { places } = UseAuthContextAPI();
    const needPlaces = [];
    let i = 0;
    while (i < places.length) {
        const data = places[i];
        i++;
        if (i <= 12) {
            needPlaces.push(data)
        }
    }

    return (
        <div className='container populer-section'>
            <div className='pupoler-place'>
                <h1 className='mb-4 text-center'>Popular Places</h1>
                <p>Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. Its cities contain medieval quarters, with landmarks like capital Bern’s Zytglogge clock tower and Lucerne’s wooden chapel bridge</p>
            </div>
            <Row xs={1} md={4} className="g-4">
                {
                    needPlaces.map((data) => <ShowedPlace data={data} key={data._id}></ShowedPlace>)
                }
            </Row>
            <div className='button'>
                <Button className='mt-5 more'>More Places</Button>
            </div>
        </div>
    );
};

const ShowedPlace = ({ data }) => {
    const { picture, title, place, rating, ratingCount, tureDuration } = data;
    return (
        <div>
            <CardGroup className='cards'>
                <Col>
                    <Card className='h-100 ' style={{ maxHeight: '100 %' }}>
                        <Card.Img className='g' style={{ maxWidth: '100%', height: 'auto' }} variant="top" src={picture} />
                        <Card.Body>
                            <Card.Title style={{ fontSize: '18px' }}>{title}</Card.Title>
                            <Card.Text style={{ fontSize: '15px' }}>
                                {place}
                            </Card.Text>
                            <Rating
                                initialRating={rating}
                                readonly={true}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                            >
                            </Rating> <span className='review'>({ratingCount} Review)</span> <br />
                            <div className='duration'>
                                <Button style={{ width: '100px', fontSize: '13px', marginTop: '10px' }} variant='success'>Details</Button>
                                <p className='mt-4'><i class="far fa-clock"></i> {tureDuration} Days</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </CardGroup>
        </div>
    )
}

export default PupolerPlace;