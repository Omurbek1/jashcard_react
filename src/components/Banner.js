import React from 'react'
import Banners from '../images/banner.png'
import './Header.css'
function Banner() {
    return (
        <div className='banners'>
            <div className='banner-container'>
                <h1>Имеется спорная точка зрения, гласящая примерно следующее.</h1>
                <hr />
                <p>В своём стремлении повысить качество жизни, они забывают, что экономическая повестка сегодняшнего дня обеспечивает.</p>
            </div>
            <img src={Banners} />
        </div>
    )
}

export default Banner