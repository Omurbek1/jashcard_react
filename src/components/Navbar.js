import React from 'react'
import './Banner.css';
import 'bootstrap/dist/css/bootstrap.css'
import logo from '../images/logo.png'
import rus from '../images/russia.png'
import { Nav, Navbar } from 'react-bootstrap'
function Navbars() {
    return (
        <>
            <Navbar bg='white'
                expand="sm" collapseOnSelect>
                <Navbar.Brand>
                    <img src={logo} width="50%" height="40px" />{' '}
                </Navbar.Brand>
                <Navbar.Toggle className="coloring" />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="#blog">Новости</Nav.Link>
                        <Nav.Link href="#about-us">О карте</Nav.Link>
                        <Nav.Link href="#contact-us">Партнеры</Nav.Link>
                        <Nav.Link href="#contact-us">Форма заявки</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <div className='list'>
                    <img className='flag' src={rus} />
                    <h4>Русский</h4>
                </div>
            </Navbar>


        </>
    )
}

export default Navbars