import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './Carusal.css'

import slider1 from '../../../images/silder-1.jpg'
import slider2 from '../../../images/silder-2.jpg'
import slider3 from '../../../images/slider-3.jpg'
import slider4 from '../../../images/slider-4.jpg'
import slider5 from '../../../images/slider-5.jpg'
import slider6 from '../../../images/silder-6.jpg'


const Carusal = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item className='img'>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='title title1'>
                        <h3> This Venice, Italy</h3>
                        <p>Venice, which is situated at the north end of the Adriatic Sea, was for hundreds of years the richest and most powerful centre of Europe</p>
                        <Button>Explore Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='img'>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='title title2'>
                        <h3>The Matterhorn, Switzerland</h3>
                        <p>The Matterhorn is a mountain of the Alps, straddling the main watershed and border between Switzerland and Italy.</p>
                        <Button>Explore Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='img'>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='title title3'>
                        <h3>Zürich City in Switzerland</h3>
                        <p>The city of Zurich, a global center for banking and finance, lies at the north end of Lake Zurich in northern Switzerland.</p>
                        <Button>Explore Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='img'>
                    <img
                        className="d-block w-100"
                        src={slider4}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='title title4'>
                        <h3>Sydney City in Australia</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Button>Explore Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='img'>
                    <img
                        className="d-block w-100"
                        src={slider5}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='title title5'>
                        <h3>Beaches of Bali, Indonesia</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Button>Explore Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='img'>
                    <img
                        className="d-block w-100"
                        src={slider6}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='title title6'>
                        <h3>Lake Lugano And Ticino, Switzerland</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Button>Explore Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carusal;