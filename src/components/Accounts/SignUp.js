import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';


const SignUp = () => {

    // email authentication /////////////////////////////////////////

    const [ createUserWithEmailAndPassword, user ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorMessage;

    if (user) {
        navigate(from, {replace: true});
    }

    const handleRegistration = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        

        createUserWithEmailAndPassword(email, password);
        
    }

    /////////////////////////////////////////////////////////////////

    // google authentication ///////////////////////////////////////////

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    if (googleError) {
            errorMessage = <p>{googleError.message}</p>;
        }
    if (googleLoading) {
        errorMessage = <p>Loading...</p>;
      }
      if (googleUser) {
        return (
          <div>
            <p>Signed In User: {user.email}</p>
          </div>
        );
      }

      /////////////////////////////////////////////////////////////////////////


    return (
        <div>
            <h1>Sign Up here Please !!!</h1>
            <form onSubmit={handleRegistration}>
                <div className="mb-3">
                    <input type="text" name='name' className="form-control w-50 mx-auto" id="name" placeholder='Enter your name...' required/>
                </div>
                <div className="mb-3">
                    <input type="email" name='email' className="form-control w-50 mx-auto" id="email" placeholder='Enter your email...' required/>
                </div>
                <div className="mb-3">
                    <input type="password" name='password' className="form-control w-50 mx-auto" id="password" placeholder='Enter your Password...' required/>
                </div>
                {errorMessage}
                <div className="buttons my-4">
                    <button type="submit" className="btn btn-primary">Register</button>
                    <span className='mx-2 text-danger fw-bold'>/</span>
                    <button className="btn btn-info" onClick={() => signInWithGoogle()}>Register with Google</button>
                </div>
                <div className="redirect">
                    <p>
                    User of Bikehaaat ? 
                    <Link to="/login" className='account-link me-2'> Login with Account</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;