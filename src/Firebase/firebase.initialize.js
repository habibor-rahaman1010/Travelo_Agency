// here is my firebase app initialize....
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from './firebase.configuration';

const initializeAuthentication = () => {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    getAnalytics(app);
}

export default initializeAuthentication;