import { useEffect, useState } from 'react';
import {getAuth,signInWithPopup,GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import app from './firebase.init';


const auth = getAuth(app);

const googleProvaider  = new GoogleAuthProvider()

const useFirebase = () => {
    const [user, setUser] = useState({});

    const singInWithGoogle = () => {
        signInWithPopup(auth,googleProvaider)
        .then(result =>{
            setUser(result.user)
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth,user => {
            setUser(user)
        })
    },[])

    const handleSingOut = () => {
        signOut(auth)
        .then(() => {
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return {
        user,
        handleSingOut,
        singInWithGoogle
    }
};

export default useFirebase;