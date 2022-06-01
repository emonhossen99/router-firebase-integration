import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';


const auth = getAuth(app)

const Products = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <p>This Is a Products</p>
            <img src={user?.photoURL} alt="" />
        </div>
    );
};

export default Products;