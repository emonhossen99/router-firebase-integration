import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app)

const Home = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h1>THis is A Home</h1>
            <h4>{user? user.displayName : 'no body'}</h4>
        </div>
    );
};

export default Home;