import React from 'react';
import Skills from '../Components/Skills/skills';
import Gallery from '../Components/Gallery/gallery';
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
                <Gallery/>
            </div>
            <div className='skills row'>
                <Skills/>
            </div>
        </div>
    );
}

export default Work;