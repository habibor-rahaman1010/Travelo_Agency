import { useContext } from 'react';
import MyAuthProvider from '../ContextAPI/MyAuthProvider';

const UseAuthContextAPI = () => {
    return useContext(MyAuthProvider)
};

export default UseAuthContextAPI;