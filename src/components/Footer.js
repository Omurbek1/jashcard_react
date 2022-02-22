import React from 'react'
import './Footer.css'
import logo from '../images/logo.png'
import unstagram from '../images/instagram.png'
import telegram from '../images/telegram.png'
import twitter from '../images/twitter.png'
import facebook from '../images/facebook.png'
function Footer() {
    return (
        <div className='footer'>

            <div>
                <img src={logo} />
            </div>
            <div className='social-responsive'>
                <div><img src={unstagram} /></div>
                <div><img src={telegram} /></div>
                <div><img src={facebook} /></div>
                <div><img src={twitter} /></div>
            </div>
            <div className='footer-text'>
                <h1>О карте</h1>
                <li>Информайия о карте</li>
                <li>Как пользоваться</li>
                <li>Обучение</li>
                <li>Картинки</li>
            </div>
            <div className='footer-text'>
                <h1>Партнеры</h1>
                <li>Список компаниий</li>
                <li>Условия сотрудничества</li>
            </div>
            <div className='footer-text'>
                <h1>Новости</h1>
                <li>Новые компании</li>
                <li>Слайдер по акциям</li>
                <li>Мероприятия</li>
            </div>
            <div className='social'>
                <div><img src={unstagram} /></div>
                <div><img src={telegram} /></div>
                <div><img src={facebook} /></div>
                <div><img src={twitter} /></div>
            </div>

            <hr className='hr' />
        </div>
    )
}

export default Footer