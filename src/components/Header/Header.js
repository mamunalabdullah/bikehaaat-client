import { signOut } from 'firebase/auth';
import React from 'react';
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaMotorcycle } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);
  const logOut = () =>{
    signOut(auth);
}
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/"><span className='text-danger fw-bold me-5'><FaMotorcycle /> BikeHaaat</span></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className={({isActive}) => 
                isActive ? "active-link" : "link" } to="/home">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({isActive}) => 
                isActive ? "active-link" : "link" } to="/blog">Blog</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({isActive}) => 
                isActive ? "active-link" : "link" } to="/about">About</NavLink>
                </li>
                
                
                {
                    user? 
                    <ul className= "navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <NavLink className={({isActive}) => 
                        isActive ? "active-link" : "link" } to="/inventories">Inventories</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className={({isActive}) => 
                        isActive ? "active-link" : "link" } to="/addinventory">Upload</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className={({isActive}) => 
                        isActive ? "active-link" : "link" } to="/minventory">Manage</NavLink>
                      </li>
                      <button className='link border-1' onClick={logOut}>Log out</button>
                    </ul>
                     : 
                    <ul className= "navbar-nav me-auto mb-2 mb-lg-0">
                      
                      <li classname="nav-item">
                        <NavLink className={({isActive}) => 
                        isActive ? "active-link" : "link" } to="/login">Sign In</NavLink>
                      </li> 
                      <li className="nav-item">
                        <NavLink className={({isActive}) => 
                        isActive ? "active-link" : "link" } to="/register">Sign Up</NavLink>
                      </li>
                    </ul>
                  }
              </ul>
              
            </div>
          </div>
        </nav>
    );
};

export default Header;