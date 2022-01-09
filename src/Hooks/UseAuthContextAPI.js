import { useContext } from 'react';
import { ContextAPI } from '../ContextAPI/MyAuthProvider';

const UseAuthContextAPI = () => {
    return useContext(ContextAPI)
};

export default UseAuthContextAPI;