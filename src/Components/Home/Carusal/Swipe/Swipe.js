import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import './Swipe.css'


// import Swiper core and required modules
import SwiperCore, {
    EffectCoverflow, Pagination
} from 'swiper';
import Review from './Review/Review';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const images = [
    { slider: 'https://images.unsplash.com/photo-1562796374-8bd211f81cbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3dpdHplcmxhbmR8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
    { slider: 'https://images.unsplash.com/photo-1489657780376-e0d8630c4bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3dpdHplcmxhbmR8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
    { slider: 'https://images.unsplash.com/photo-1566208319716-8e8a1256babb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3dpdHplcmxhbmR8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
    { slider: 'https://images.unsplash.com/photo-1595789352331-ef7065958f97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGdlcm1hbnl8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
    { slider: 'https://images.unsplash.com/photo-1556899727-2849fd6a224c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGdlcm1hbnl8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
    { slider: 'https://images.unsplash.com/photo-1582785513879-fcd3ea2b5af8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGdlcm1hbnl8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
    { slider: 'https://images.unsplash.com/photo-1612450622817-e9a07fc6a3cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGZyYW5jZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60' },
    { slider: 'https://images.unsplash.com/photo-1615731022580-ffb2f9e45960?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGl0YWx5fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60' },
    { slider: 'https://images.unsplash.com/photo-1612450622817-e9a07fc6a3cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGZyYW5jZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60' },
    { slider: 'https://images.unsplash.com/photo-1546465612-c841dcade027?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZyYW5jZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60' },
    { slider: 'https://images.unsplash.com/photo-1564420179789-ede909db4882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJhbmNlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60' }
]

const Swipe = () => {

    return (
        <>
            <div className='mb-4 p-5 pb-5'>
                <div className='container'>
                    <h2 className='text-center pb-2'>Populer Places Images</h2>
                    <>
                        <Swiper effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                "rotate": 50,
                                "stretch": 0,
                                "depth": 100,
                                "modifier": 1,
                                "slideShadows": true
                            }} pagination={true} className="mySwiper"
                        >
                            {
                                images.map((x) => <SwiperSlide><img src={x.slider} alt='slider' /></SwiperSlide>)
                            }
                        </Swiper>
                    </>
                </div>
            </div>

            <div className='container'>
                <Review></Review>
            </div>

        </>
    );
};

export default Swipe;