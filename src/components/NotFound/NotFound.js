import React from 'react';
import picture from '../../img/404-page.webp'
const NotFound = () => {
    return (
        <div className='text-center py-5'>
            <h1 className='text-danger mb-5 fst-italic'>!!! Oops... Page not found... !!!</h1>
            <img src={picture} alt="" />
            <h5 className='text-danger mt-5'>The page you are searching is not Available !!!</h5>
        </div>
    );
};

export default NotFound;