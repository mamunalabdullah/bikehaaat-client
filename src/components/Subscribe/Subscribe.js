import React from 'react';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className="subscribe py-5">
            <div className="container">
                <div className="subscribe-title w-75 mx-auto">
                    <h4>Keep in touch with us</h4>
                    <p>To know more and get updated about our stokes please connect with us and give your email address... We will contact you with your email address...</p>
                </div>
                <form action="" className='w-75 mx-auto d-flex'>
                    <input type="email" name="usermail" className="form-control" placeholder="Enter your email to update" />
                    <input type="submit" value="SUBMIT" className="btn btn-primary" />
                </form>
            </div>
        </div>
    );
};

export default Subscribe;