import React from 'react';
import './skills.scss';

function Skills() {
    return (
        <div className='skills-container'>
            <h2 className='title'>Skills</h2>
                <div className='skills'>
                    <div className='skill'><p>CSS</p></div>
                    <div className='skill'><p>HTML</p></div>
                    <div className='skill'><p>Typescript</p></div>
                    <div className='skill'><p>Javascript</p></div>
                    <div className='skill'><p>npm</p></div>
                    <div className='skill'><p>React.js</p></div>
                </div>
        </div>
    )
}

export default Skills;