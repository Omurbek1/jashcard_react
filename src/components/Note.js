import React from 'react'
import './Note.css'
import card from '../images/card2.png'
function Note() {
    return (
        <div className='Note'>
            <div className='Note-card'>
                <img src={card} />
            </div>
            <div className='Note-text'>
                <h1>Примечания</h1>
                <hr />
                <p>С учётом сложившейся международной обстановки, разбавленное изрядной долей эмпатии, рациональное мышление создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса.</p>
                <p>А ещё диаграммы связей объявлены нарушающими общечеловеческие нормы этики и морали. Предварительные выводы.</p>
                <div className='note-buttons'>

                    <button className='motemorebtn'>
                        Узнать больше
                    </button>
                </div>
                <div className='Note-card-res'>
                    <img src={card} />
                </div>
            </div>

        </div >
    )
}

export default Note