import React from 'react';
import {FaLinkedin, FaEnvelope} from 'react-icons/fa';
import './footer.scss';

function Footer() {
    return (
        <div className='footer'>
            <p className='small'>&copy;2022 Designed and Coded by Pablo Torres</p>
            <div className='social-icons'>
                <div id='linked-in' onClick={() => window.open('https://www.linkedin.com/in/pablo-torres-950084240', '_blank') } style={{cursor: 'pointer'}}>
                    <FaLinkedin size='1.5em'/>
                </div>
                <div id='envelope' onClick={() => window.open('mailto:pabloytorresportfolio@gmail.com') } style={{cursor: 'pointer'}}>
                    <FaEnvelope size='1.5em'/>
                </div>
            </div>
        </div>
    )
}

export default Footer;