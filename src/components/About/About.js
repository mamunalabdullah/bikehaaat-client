import React from 'react';
import './About.css';
import img from '../../img/about.jpg'

const About = () => {
    return (
        <div className='about py-5'>
            <div className='container'>
                <img src={img} alt="about img with bike" />
                <p className='py-5'>BikeHaaat is the bike warehouse website. Where people can know about different bikes collection, those price, available stocks, suppliers and specifications. Authorized users can restock the quantity of bikes and deliver the bikes.</p>
            </div>
        </div>
    );
};

export default About;