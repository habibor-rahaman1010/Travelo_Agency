import React, { createContext } from 'react';

export const ContextAPI = createContext()

const MyAuthProvider = ({ children }) => {
    const allContext = 'hello'
    return (
        <ContextAPI.Provider value={allContext}>
            {children}
        </ContextAPI.Provider>
    );
};

export default MyAuthProvider;