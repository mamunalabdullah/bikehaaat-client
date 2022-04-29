import React from 'react';
import { Link } from 'react-router-dom';
import { FaMotorcycle, FaAccusoft, FaEnvelope, FaMobileAlt } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container py-5">
                <div className="row justify-content-around">
                    <div className="col-md-4">
                        <ul>
                            <li><FaMotorcycle /> BikeHaaat</li>
                            <li><FaAccusoft /> Shaheb Bazar, 0 point, Rajshahi</li>
                            <li><FaEnvelope /> abdullahmamun1597@gmail.com</li>
                            <li><FaMobileAlt /> 01832618243</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <ul>
                            <li><Link to="/contact" className='footer-link'>Contact</Link></li>
                            <li><Link to="/about" className='footer-link'>About</Link></li>
                            <li><Link to="/privacy" className='footer-link'>Privacy</Link></li>
                            <li><Link to="/terms" className='footer-link'>Terms</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <ul>
                            <li><Link to="/media" className='footer-link'>Media</Link></li>
                            <li><Link to="/blog" className='footer-link'>Blog</Link></li>
                            <li><Link to="/forums" className='footer-link'>Forums</Link></li>
                        </ul>
                    </div>
                </div>
                <h4 className='text-primary py-2'>All rights &copy; belongs to <span className='text-white'>
                <FaMotorcycle /> BikeHaat {new Date().getFullYear()}</span></h4>
            </div>
        </div>
    );
};

export default Footer;