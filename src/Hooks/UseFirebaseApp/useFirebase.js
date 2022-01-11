import { useEffect, useState } from "react";
import initializeAuthentication from '../../Firebase/firebase.initialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from "firebase/auth";

const useFirebase = () => {
    initializeAuthentication()
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    //Google sign in functionality here...
    const googleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        const auth = getAuth();
        return signInWithPopup(auth, googleProvider);
    }

    //Github sign in functionality here....
    const githubSignIn = () => {
        const githubProvider = new GithubAuthProvider();
        const auth = getAuth();
        return signInWithPopup(auth, githubProvider);
    }

    //emal password user creation functionality herer....
    const coustomUserCreate = (email, password) => {
        const auth = getAuth();
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //email password user login funtionality here
    const coustomUserLogin = (email, password) => {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password)
    }

    //verify email address
    const emailVerify = () => {
        const auth = getAuth()
        return sendEmailVerification(auth.currentUser)
    }

    //updateProfile set display name...
    const coustomUpdateProfile = (userDisplayName) => {
        const auth = getAuth();
        return updateProfile(auth.currentUser, userDisplayName)
    }

    //reset password functionality here
    const userPasswordReset = (email) => {
        const auth = getAuth();
        return sendPasswordResetEmail(auth, email);
    }


    // user persistance, if you use depandenchi in useEfect mustbe use callback function use in else statment otherwise looping infinity.
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                return () => {
                    setUser({})
                };
            }
        })
        return () => unsubscribe();
    }, [user])


    // // user persistance, if you use depandenchi in useEfect mustbe use callback function use in else statment otherwise looping infinity.
    // useEffect(() => {
    //     const auth = getAuth();
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setUser(user);
    //         }
    //         else {
    //             return () => setUser({})
    //         }
    //     })
    //     return () => unsubscribe();
    // }, [user])

    // // user persistance functionality,  if you dont use dependenci in useEffect so you can try this way...
    // useEffect(() => {
    //     const auth = getAuth();
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setUser(user);
    //         }
    //         else {
    //             setUser({})
    //         }
    //     })
    //     return () => unsubscribe();
    // }, [])


    // logout user
    const logOutUser = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch(() => {

            })
    }

    return {
        user,
        setUser,
        error,
        setError,
        googleSignIn,
        githubSignIn,
        logOutUser,
        coustomUserCreate,
        coustomUserLogin,
        coustomUpdateProfile,
        emailVerify,
        userPasswordReset
    }
};

export default useFirebase;