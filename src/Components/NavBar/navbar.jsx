import React, {useState} from 'react';
import './navbar.scss'

function Header() {
    const [isActive, setIsActive] = useState(false);
    
    
    return (
        <div className='top-nav'>
            <p>Logo</p>
            <div className='nav-links'>
                <a className='tab' id='work'>Work</a>
                <a className='tab'id='about'>About</a>
                {/* <button className={`header-button`} id='work-button'>Work</button>
                <button className={`header-button`} id='about-button'>About</button> */}
            </div>
        </div>

        
    )
}

export default Header;