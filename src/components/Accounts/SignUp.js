import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { GoogleAuthProvider, sendEmailVerification, signInWithPopup } from 'firebase/auth';


const SignUp = () => {

    const provider = new GoogleAuthProvider();
    const handleGoogle = () => {
        
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
            if (user) {
                navigate(from, {replace: true});
            }
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });

    }
    /////////////////////////////////////////////////////////////////////////
    

    // email authentication  /////////////////////////////
    const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, {replace: true});
    }

    const handleSignup = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        

        createUserWithEmailAndPassword(email, password);
    /////////////////////////////////////////////////////////////////////////
    }
    return (
        <div>
            <h1>Sign Up here Please !!!</h1>
            <form onSubmit={handleSignup}>
                <div className="mb-3">
                    <input type="email" name='email' className="form-control w-50 mx-auto" id="email" placeholder='Enter your email...' required/>
                </div>
                <div className="mb-3">
                    <input type="password" name='password' className="form-control w-50 mx-auto" id="password" placeholder='Enter your Password...' required/>
                </div>
                <div className="buttons my-4">
                    <button type="submit" className="btn btn-primary">Register</button>
                    <span className='mx-2 text-danger fw-bold'>/</span>
                    <button className="btn btn-info" onClick={handleGoogle}>Register with Google</button>
                </div>
                <div className="redirect">
                    <p>
                    User of Bikehaaat ? 
                    <Link to="/login" className='me-2'> Login with Account</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;