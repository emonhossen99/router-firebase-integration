import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app)

const Login = () => {
    const [signInWithGoogle, user,] = useSignInWithGoogle(auth)

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const hangleSingIn = () => {
        signInWithGoogle()
        .then(() => {
            navigate(from, { replace: true });
        })
    }
    return (
        <div>
            <form>
                <h2>Places LogIn</h2>
                <input onClick={hangleSingIn} type="button" value="GoogleSingIn" />
                <br /><br />
                <input type="email" placeholder='Enter Your Email :' name="" id="" />
                <br />
                <input type="password" placeholder='Enter Your Password :' name="" id="" />
                <br />
                <input type="submit" value="LogIn" />
                <br />

            </form>
        </div>
    );
};

export default Login;