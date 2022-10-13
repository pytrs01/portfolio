import React from 'react';
import './work.scss';

function Work() {
    return (
        <div className='work-container'>
            <div className='intro row'> 
            <div className='greeting'>
                <h1>👋🏽 Hi! <br/> 
                My name is <br/> 
                Pablo Torres!</h1>
            </div>
            <div className='details'>
                <p className='large'>
                    👨🏽‍💻 Frontend Developer. <br/>
                    📍 Based in ATX.
                </p>

            </div>

            </div>
            <div className='gallery row'>
                Works gallery goes here
            </div>
            <div className='skills row'>
                Skills go here
            </div>
        </div>
    );
}

export default Work;