import React, { createContext } from 'react';
import UserPopularPlace from '../Hooks/UserPopularPlace';

export const ContextAPI = createContext()

const MyAuthProvider = ({ children }) => {
    const [places] = UserPopularPlace()

    const allContcxt = {
        places
    }
    return (
        <ContextAPI.Provider value={allContcxt}>
            {children}
        </ContextAPI.Provider>
    );
};

export default MyAuthProvider;