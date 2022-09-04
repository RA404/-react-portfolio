import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@material-ui/icons/Reorder';

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

    return (
        <div className='navbar' id={expandNavbar ? "open" : "close"}>
            <div className='toggleButton'>
                <button onClick={() => { setExpandNavbar((prev) => !prev) }}>
                    <ReorderIcon />
                </button>
            </div>
            <div className='links'>
                <Link to='/' className='link__item'>Home</Link>
                <Link to='/projects' className='link__item'>Projects</Link>
                <Link to='/experience' className='link__item'>Experience</Link>
                <Link to='/education' className='link__item'>Education</Link>
                <Link to='/testimonials' className='link__item'>Testimonials</Link>
            </div>
        </div>
    )
}

export default Navbar