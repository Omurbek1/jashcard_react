import React from 'react'
// import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import './Navbar.css'
// import FontAwesomeIcon from '@fortawesome/fontawesome-free'
import russi from '../images/russia.png'
import { useState } from 'react';
function Navbar() {
    const [isMobile, setIsMobile] = useState(false)
    return (
        <nav className='navbar'>
            <img src={logo} className='logo' />
            <ul className={isMobile ? 'nav-links-mobile' : "nav-links"}
                onClick={() => setIsMobile(false)}
            >
                <a to='' className='news'>
                    <li>Новости</li>
                </a>
                <a to='' className='map'>
                    <li>О карте</li>
                </a>
                <a to='' className='partner'>
                    <li>Партнеры</li>
                </a>
                <a to='' className='form'>
                    <li>Форма заявки</li>
                </a>
                <a to='' className='russian'>
                    <li><img src={russi} />Русский</li>
                </a>
            </ul>
            <button className='mobile-menu-icon'
                onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? (<i class="fas fa-times"></i>)
                    : (<i class="fas fa-bars"></i>)}
            </button>
        </nav>
    )
}

export default Navbar