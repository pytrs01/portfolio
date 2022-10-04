import React, {useState} from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import logo from '../../images/logo.PNG';
import lightmode from '../../images/light-mode.svg';
import darkmode from '../../images/moon.svg';
import '../../scss/main.scss';
import './navbar.scss'

export default function Navbar(props) {  
    const [navbarActive, setNavbarActive] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    const addLine = () => {
        if(window.scrollY >= 80) {
            setNavbarActive(true);
        }
        else {
            setNavbarActive(false);
        }
    }

    window.addEventListener('scroll', addLine)

    return (
        <>
        <div className={`top-nav ${navbarActive ? 'active' : ''}` }>
            <a href='#top' className='logo'><img src={logo} className='logo-img'></img></a>
            <ul>
                <CustomLink to='/'>Work</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </ul>
            <i onClick={props.switchTheme} className="icon"><img src={props.theme === 'dark' ? lightmode : darkmode} alt={`${props.theme === 'dark' ? 'lightmode' : 'darkmode'} icon`} id={`${props.theme === 'dark' ? 'lightmode' : 'darkmode'}`}></img></i>
        </div>   
        </>
    )
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true});

    return (
        <li className={isActive ? 'active' : 'disabled'}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}