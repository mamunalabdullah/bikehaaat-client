import { signOut } from 'firebase/auth';
import React from 'react';
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaMotorcycle } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  const [user] = useAuthState(auth);
  const logOut = () =>{
    signOut(auth);
}
    return (

      <Navbar className='py-2 fs-4 navbar-bg bg-info' expand="lg">
                    <Container>
                        <Navbar.Brand as={Link} to="/" className='text-danger fw-bold logo'><FaMotorcycle className='text-dark'/> BikeHaaat</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="ms-auto my-2 my-lg-0"
                        navbarScroll>
                                <NavLink className={({isActive}) => 
                                  isActive ? "active-link" : "link" } to="/home">Home</NavLink>
                                <NavLink className={({isActive}) => 
                                  isActive ? "active-link" : "link" } to="/blog">Blog</NavLink>
                                <NavLink className={({isActive}) => 
                                  isActive ? "active-link" : "link" } to="/about">About</NavLink>
                                {
                                    user ?
                                    <>
                                      <NavLink className={({isActive}) => 
                                        isActive ? "active-link" : "link" } to="/inventories">Inventories</NavLink>
                                      <NavLink className={({isActive}) => 
                                        isActive ? "active-link" : "link" } to="/addinventory">Upload</NavLink>
                                      <NavLink className={({isActive}) => 
                                        isActive ? "active-link" : "link" } to="/items">My-Items</NavLink>
                                      <NavLink className={({isActive}) => 
                                        isActive ? "active-link" : "link" } to="/inventoryList">List</NavLink>
                                      <button className='link border-0' onClick={logOut}>Log out</button>
                                    </>
                                    :
                                    <>
                                        <NavLink className={({isActive}) => 
                                          isActive ? "active-link" : "link" } to="/login">Sign In</NavLink>
                                        <NavLink className={({isActive}) => 
                                          isActive ? "active-link" : "link" } to="/register">Sign Up</NavLink>
                                    </>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        
    );
};

export default Header;