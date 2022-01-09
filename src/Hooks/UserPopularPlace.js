import { useEffect, useState } from 'react';

const UserPopularPlace = () => {
    const [places, setPlaces] = useState([])

    useEffect(() => {
        const API = `./Data/data.json`;
        fetch(API)
            .then((res) => res.json())
            .then((data) => setPlaces(data))
    }, [])
    return [places]
};

export default UserPopularPlace;