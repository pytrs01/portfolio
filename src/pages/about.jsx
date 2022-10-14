import React from 'react';
import pfp from '../images/pfp.jpg'
import './about.scss';

function About() {
    return (
        <div className='about-container'>
            <div className='img-container'><img src={pfp} alt='profile pic' className='profile-pic'></img></div>
            <div className='text-container'>
            <p className='heading large'>Hi! I'm Pablo!</p>
            <p className='about-me'>
            I’m a Frontend Developer, currently at General Motors, based in Austin, TX! I graduated with a Bachelor of Science Degree in Information Sciences and Technology and a Smeal Business Certificate from Penn State. <br/>
            <br/>
            I enjoy coding beautiful and responsive websites. I have also dabbled in UI Design. I have a passion for designing and creating websites that help bridge the gap between people and technology! <br/>
            <br/>
            Please feel free to reach out to me! 
            </p>
            </div>
        </div>
    );
}

export default About;