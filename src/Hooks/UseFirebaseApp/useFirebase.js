import { useEffect, useState } from "react";
import initializeAuthentication from '../../Firebase/firebase.initialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from "firebase/auth";

const useFirebase = () => {
    initializeAuthentication()
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    //Google sign in functionality here...
    const googleSignIn = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        const auth = getAuth();
        return signInWithPopup(auth, googleProvider);
    }

    //Github sign in functionality here....
    const githubSignIn = () => {
        setIsLoading(true)
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
        setIsLoading(true);
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


    // user persistance, its the best way to persistance login user... dont issu crreate when you solve isloading problem...
    useEffect(() => {
        setIsLoading(true)
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe();
    }, []);


    // // user persistance, if you use depandenchi in useEfect mustbe use callback function use in else statment otherwise looping infinity. it's methos use to still work but some poblem create when you solve reload problem, [isLoding, setIsLoading] = useState(true); recomende don't use dependenchi in your useEffect state...

    // useEffect(() => {
    //     setIsLoading(true)
    //     const auth = getAuth();
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setUser(user);
    //         }
    //         else {
    //             return () => {
    //                 setUser({})
    //             };
    //         }
    //         setIsLoading(false)
    //     })
    //     return () => unsubscribe();
    // }, [user])


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
        setIsLoading(true)
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch(() => {

            }).finally(() => {
                setIsLoading(false)
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
        userPasswordReset,
        setIsLoading,
        isLoading,
    }
};

export default useFirebase;