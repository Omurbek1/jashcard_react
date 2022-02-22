import React from 'react'
import './About.css'
import card from '../images/card.png'
function About() {
    return (
        <div className='About'>
            <div className='About-text'>
                <h1>О карте</h1>
                <hr />
                <p>Господа, новая модель организационной деятельности однозначно фиксирует необходимость анализа существующих паттернов поведения.</p>
                <p>планирование требует определения и уточнения прогресса профессионального сообщества. Идейные соображения высшего порядка, а также семантический разбор внешних.</p>
                <div className='buttons'>
                    <button className='getbtn'>
                        Получить
                    </button>
                    <button className='morebtn'>
                        Узнать больше
                    </button>
                </div>
            </div>
            <div className='about-card'>
                <img src={card} />
            </div>
        </div >
    )
}

export default About