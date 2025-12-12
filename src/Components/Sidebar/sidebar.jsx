import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './sidebar.scss';

function Sidebar() {
    return (
        <aside className='sidebar'>
            <div className='sidebar-content'>
                <div className='sidebar-header'>
                    <h1 className='name'>Pablo Torres</h1>
                    <h2 className='title'>
                        {'Software Engineer'.split('').map((char, index) => (
                            <span key={index} className='title-letter' style={{ animationDelay: `${index * 0.15}s` }}>
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                    </h2>
                    <p className='tagline'>
                        I build scalable, user-friendly web applications
                        with modern frontend technologies.
                    </p>
                </div>

                <nav className='sidebar-nav'>
                    <ul>
                        <li>
                            <a href='#about'>
                                <span className='nav-indicator'></span>
                                <span className='nav-text'>About</span>
                            </a>
                        </li>
                        <li>
                            <a href='#experience'>
                                <span className='nav-indicator'></span>
                                <span className='nav-text'>Experience</span>
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className='sidebar-social'>
                    <a href='https://www.linkedin.com/in/pablo-torres-950084240' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
                        <FaLinkedin />
                    </a>
                    <a href='mailto:pabloytorresportfolio@gmail.com' aria-label='Email'>
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
