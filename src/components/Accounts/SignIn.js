import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className='py-5'>
            <h1>Sign In here Please !!!</h1>
            <form>
                <div className="mb-3">
                    <input type="email" name='email' className="form-control w-50 mx-auto" id="email" placeholder='Enter your email...' required/>
                </div>
                <div className="mb-3">
                    <input type="password" name='password' className="form-control w-50 mx-auto" id="password" placeholder='Enter your Password...' required/>
                </div>
                <div className="buttons my-4">
                    <button type="submit" className="btn btn-primary">Login</button>
                    <span className='mx-2 text-danger fw-bold'>/</span>
                    <button type="submit" className="btn btn-info">Google Login</button>
                </div>
                
                <div className="redirect">
                    <p>
                    New to Bikehaaat ? 
                    <Link to="/register" className='account-link me-2'> Create New Account</Link>
                    <span className='mx-2 text-danger fw-bold'>|</span>
                    Forget Password ? 
                    <button className='btn btn-danger ms-2'> Reset Password</button>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default SignIn;