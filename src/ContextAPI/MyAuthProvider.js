import React, { createContext } from 'react';
import useFirebase from '../Hooks/UseFirebaseApp/useFirebase';
import UserPopularPlace from '../Hooks/UserPopularPlace';

export const ContextAPI = createContext()

const MyAuthProvider = ({ children }) => {
    const [places] = UserPopularPlace();
    const firebaseContext = useFirebase()

    const allContcxt = {
        places,
        firebaseContext,
    }
    return (
        <ContextAPI.Provider value={allContcxt}>
            {children}
        </ContextAPI.Provider>
    );
};

export default MyAuthProvider;