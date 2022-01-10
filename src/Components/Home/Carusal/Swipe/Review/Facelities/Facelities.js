import React from 'react';
import './Facelities.css'

import service1 from '../../../../../../images/servies/1.svg';
import service2 from '../../../../../../images/servies/2.svg';
import service3 from '../../../../../../images/servies/3.svg';

const Facelities = () => {
    const bannerImg = `https://preview.colorlib.com/theme/travelo/img/banner/xvideo.png.pagespeed.ic.kLYw1f-fB1.jpg`
    var ban = {
        width: '100%',
        backgroundRepeat: 'no-repeat',
        minWidth: '100%',
        minHeight: '57vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url(${bannerImg})`
    }
    return (
        <div className='mainBanner'>
            <div className='baner' style={ban}>
                <div className='details'>
                    <h1 className='banner-title'>Say hello, tourism.</h1>
                </div>
            </div>

            <div className='services'>
                <div className='services-container container'>
                    <div className='service'>
                        <div><img src={service1} alt="" /></div>
                        <h4>Comfortable Journey</h4>
                        <small>A wonderful serenity has taken to the possession of my entire soul.</small>
                    </div>

                    <div className='service'>
                        <div><img src={service2} alt="" /></div>
                        <h4>Comfortable Journey</h4>
                        <small>A wonderful serenity has taken to the possession of my entire soul.</small>
                    </div>

                    <div className='service'>
                        <div><img src={service3} alt="" /></div>
                        <h4>Comfortable Journey</h4>
                        <small>A wonderful serenity has taken to the possession of my entire soul.</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facelities;

