import React from 'react';
import useFirebase from '../../useFirebase';

const Login = () => {
    const {singInWithGoogle} = useFirebase();
    return (
        <div>
            <form>
            <h2>Places LogIn</h2>
            <input onClick={singInWithGoogle} type="button" value="GoogleSingIn" />
            <br /><br />
            <input type="email"  placeholder='Enter Your Email :' name="" id="" />
                <br />
                <input type="password"  placeholder='Enter Your Password :' name="" id="" />
                <br />
                <input type="submit" value="LogIn" />
                <br />
                
            </form>
        </div>
    );
};

export default Login;