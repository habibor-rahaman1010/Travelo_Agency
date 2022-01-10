import React from 'react';
import Carusal from './Carusal/Carusal';
import Facelities from './Carusal/Swipe/Review/Facelities/Facelities';
import Swipe from './Carusal/Swipe/Swipe';
import Places from './Places/Places';
import PupolerPlace from './PupolerPlace/PupolerPlace';
import Subscribe from './Subscribe/Subscribe';
import Trip from './Trip/Trip';

const Home = () => {
    return (
        <div>
            <Carusal></Carusal>
            <Places></Places>
            <Subscribe></Subscribe>
            <PupolerPlace></PupolerPlace>
            <Swipe></Swipe>
            <Facelities></Facelities>
            <Trip></Trip>
        </div>
    );
};

export default Home;