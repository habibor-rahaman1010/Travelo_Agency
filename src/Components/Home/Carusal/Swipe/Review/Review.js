import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Review.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";
import Rating from 'react-rating';


// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const reviews = [
    {
        picture: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        rating: 2.5,
        ratingCount: 65,
        review: 'I had been to Switzerland in the first weekend of March. I had been to Paris for my business trip for a month and we planned for a trip to Switzerland.'
    },
    {
        picture: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmV2aWV3JTIwcGVvcGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        rating: 4.5,
        ratingCount: 145,
        review: 'I had been to Switzerland in the first weekend of March. I had been to Paris for my business trip for a month and we planned for a trip to Switzerland.'
    },
    {
        picture: "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmV2aWV3JTIwcGVvcGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        rating: 3.6,
        ratingCount: 45,
        review: 'I had been to Switzerland in the first weekend of March. I had been to Paris for my business trip for a month and we planned for a trip to Switzerland.'
    },
    {
        picture: "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldmlldyUyMHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        rating: 3.5,
        ratingCount: 95,
        review: 'I had been to Switzerland in the first weekend of March. I had been to Paris for my business trip for a month and we planned for a trip to Switzerland.'
    },
    {
        picture: "https://images.unsplash.com/photo-1485893226355-9a1c32a0c81e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJldmlldyUyMHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        rating: 4,
        ratingCount: 115,
        review: 'I had been to Switzerland in the first weekend of March. I had been to Paris for my business trip for a month and we planned for a trip to Switzerland.'
    },
    {
        picture: "https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJldmlldyUyMHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        rating: 4.5,
        ratingCount: 87,
        review: 'I had been to Switzerland in the first weekend of March. I had been to Paris for my business trip for a month and we planned for a trip to Switzerland.'
    },
    {
        picture: "https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmV2aWV3JTIwcGVvcGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        rating: 5,
        ratingCount: 165,
        review: 'I had been to Switzerland in the first weekend of March. I had been to Paris for my business trip for a month and we planned for a trip to Switzerland.'
    },
    {
        picture: "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        rating: 3.5,
        ratingCount: 119,
        review: 'I had been to Switzerland in the first weekend of March. I had been to Paris for my business trip for a month and we planned for a trip to Switzerland.'
    },
    {
        picture: "https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        rating: 4.5,
        ratingCount: 129,
        review: 'I had been to Switzerland in the first weekend of March. I had been to Paris for my business trip for a month and we planned for a trip to Switzerland.'
    },
]



const Review = () => {

    return (
        <div className='pb-5'>
            <h2 className='text-center'>Tourism review</h2>
            <>

                <Swiper
                    mySwiper
                    slidesPerView={3.5}
                    spaceBetween={30}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true
                    }}
                    navigation={true}
                    className="mySwiper"
                >

                    {reviews.map((x) => (

                        <SwiperSlide className='myReviewSlide'>

                            <div className='px-3'>
                                <img src={x.picture} alt="" height={100} />
                                <Rating
                                    initialRating={x.rating}
                                    readonly={true}
                                    emptySymbol="far fa-star icon-color"
                                    fullSymbol="fas fa-star icon-color"
                                >
                                </Rating> <span className='review'>({x.ratingCount} Review)</span> <br />
                                <small>{x.review} </small>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        </div>
    );


};

export default Review;