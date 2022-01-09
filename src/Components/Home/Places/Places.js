import React from 'react';
import './Placees.css'
import image1 from '../../../images/images/imaeg1.webp';
import image2 from '../../../images/images/image2.webp';
import image3 from '../../../images/images/image3.webp';
import image4 from '../../../images/images/image4.webp';
import image5 from '../../../images/images/image5.webp';
import image6 from '../../../images/images/image6.webp';

const data = [
    { title: 'Italy', places: '13 Places', imgage: image1 },
    { title: 'Brazil', places: '17 Places', imgage: image2 },
    { title: 'America', places: '10 Places', imgage: image3 },
    { title: 'Napal', places: '14 Places', imgage: image4 },
    { title: 'Maldives', places: '11 Places', imgage: image5 },
    { title: 'Indonesia', places: '18 Places', imgage: image6 }
]

const Places = () => {
    return (
        <div className='place'>
            <div className='text-center'>
                <h2>Popular Destination</h2>
                <p className='w-50 m-auto px-5 pt3 pb-5 '>Lost With Purpose is another great travel blog that focuses on providing detailed information about unusual travel destinations like Saudi Arabia and Afghanistan that you can follow.</p>
            </div>
            <div className='PupolerPlace'>
                {
                    data.map((x) => <Place x={x} key={x.title}></Place>)
                }
            </div>
        </div>
    );
};

const Place = ({ x }) => {
    const { title, places, imgage } = x
    return (
        <div className='pupoler' style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(${imgage})`,
            height: '100%',
            width: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '300px',
        }}>
            <div className='details'>
                <h6>{title}</h6>
                <small>{places}</small>
            </div>
        </div>
    )
}

export default Places;