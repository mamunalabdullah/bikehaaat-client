import axios from 'axios';
import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../Firebase/firebase.init';

const SignIn = () => {

    // email authentication /////////////////////////////////////////

    const [signInWithEmailAndPassword, user, loading, error] =useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorMessage;
    const emailRef = useRef('');
    const passwordRef = useRef('');

    if (error) {
        errorMessage = <p>{error?.message}</p>
      }
    if (loading) {
        errorMessage = <p>Loading...</p>;
      }
    if (user) {
        // navigate(from, {replace: true});
    }

    const handleLogin = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
    
        await signInWithEmailAndPassword(email, password);
        const {data} = await axios.post('http://localhost:5000/login', {email});
        localStorage.setItem('token', data.token)
        navigate(from, {replace: true});
    }

    /////////////////////////////////////////////////////////////////

    //   reset password ///////////////////////////////////////////////////////

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const resetPassword = async() => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
          toast('Password reset email sent!!!');
    }

    ///////////////////////////////////////////////////////////////////

    // google authentication ///////////////////////////////////////////
    
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    if (googleError) {
            errorMessage = <p>{googleError.message}</p>;
        }
    if (googleLoading) {
        errorMessage = <p>Loading...</p>;
      }
      if (googleUser) {
        navigate(from, {replace: true});
      }

      /////////////////////////////////////////////////////////////////////////


    return (
        <div className='py-5'>
            <h1>Sign In here Please !!!</h1>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <input ref={emailRef} type="email" name='email' className="form-control w-50 mx-auto" id="email" placeholder='Enter your email...' required/>
                </div>
                <div className="mb-3">
                    <input ref={passwordRef} type="password" name='password' className="form-control w-50 mx-auto" id="password" placeholder='Enter your Password...' required/>
                </div>
                {errorMessage}
                <div className="buttons my-4">
                    <button type="submit" className="btn btn-primary">Login</button>
                    <span className='mx-2 text-danger fw-bold'>/</span>
                    <button className="btn btn-info" onClick={() => signInWithGoogle()}>Login with Google</button>
                </div>
                <div className="redirect">
                    <p>
                    New to Bikehaaat ? 
                    <Link to="/register" className='account-link me-2'> Create New Account</Link>
                    <span className='mx-2 text-danger fw-bold'>|</span>
                    Forget Password ? 
                    <button className='btn btn-danger ms-2' onClick={resetPassword}>Reset Password</button>
                    </p>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignIn;