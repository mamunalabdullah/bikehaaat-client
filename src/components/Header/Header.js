import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaMotorcycle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);
  const logOut = () =>{
    signOut(auth);
}
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link className="navbar-brand" to="/"><span className='text-danger fw-bold'><FaMotorcycle /> BikeHaaat</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/blog">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/minventory">ManageInventory</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">Sign Up</Link>
        </li>
      </ul>
      <span className="navbar-text">
         {
            user? 
            <button className='link' onClick={logOut}>Log out</button> : 
            <Link className="nav-link" to="/login">Sign In</Link>
          }
      </span>
    </div>
  </div>
</nav>
    );
};

export default Header;