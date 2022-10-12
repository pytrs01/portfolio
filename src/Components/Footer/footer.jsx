import React from 'react';
import {FaLinkedin, FaEnvelope} from 'react-icons/fa';
import './footer.scss';

function Footer() {
    return (
        <div className='footer'>
            <p className='footer-text'>&copy;2022 Designed and Coded by Pablo Torres</p>
            <div className='social-icons'>
                <div id='linked-in'><FaLinkedin size='1.5em'/></div>
                <div id='envelope'><FaEnvelope size='1.5em'/></div>
            </div>
        </div>
    )
}

export default Footer;