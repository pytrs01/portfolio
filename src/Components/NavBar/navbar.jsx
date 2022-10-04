import React, {useState} from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './navbar.scss'

export default function Navbar() {  
    const [navbarActive, setNavbarActive] = useState(false);
    
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
            <a href='#top'>Logo</a>
            <ul>
                <CustomLink to='/'>Work</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </ul>
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