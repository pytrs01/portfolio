import React from 'react';
import './home.scss';

function Home() {
    return (
        <div className='home-container'>
            <div className='intro'>
                <h1>Welcome to My Portfolio</h1>
                <p className='large'>
                    Hi, I'm Pablo Torres.<br/>
                    Software Engineer based in Austin, TX.<br/>
                    Explore my work, skills, and more!
                </p>
            </div>
        </div>
    );
}

export default Home;
