import React from 'react';
import { FaMotorcycle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
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
          <Link className="nav-link active" aria-current="page" to="/minventory">ManageInventory</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Features</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Pricing</Link>
        </li>
      </ul>
      <span className="navbar-text">
       User
      </span>
    </div>
  </div>
</nav>
    );
};

export default Header;