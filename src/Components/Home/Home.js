import React from 'react';
import Carusal from './Carusal/Carusal';
import Swipe from './Carusal/Swipe/Swipe';
import Places from './Places/Places';
import PupolerPlace from './PupolerPlace/PupolerPlace';
import Subscribe from './Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Carusal></Carusal>
            <Places></Places>
            <Subscribe></Subscribe>
            <PupolerPlace></PupolerPlace>
            <Swipe></Swipe>
        </div>
    );
};

export default Home;