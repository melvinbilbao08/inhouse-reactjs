import React from 'react'
import '../styles/main.scss'
import { CardDataOne, CardDataThree, CardDataTwo } from './CardData'




function Info() {
    return (
        <div className='info'>
            <div className="info__content max-width">
                <h1>Why to choose us?</h1>
                <p>Lorem ipsum dolor sit amet cntore a dolore. Possimus tenetur sit ab id ducimus sunt. Quos aspernatur voluptate ut fuga accusamus odit praesentium facilis, iste unde tempore magnam eveniet asperiores maiores alias sequi. Rerum, nisi!</p>
            </div>

             <div className="info__card">
                <div className="info__card__container">
                    <div className='icon' >{CardDataOne.icon}</div>
                    <div className='label'>{CardDataOne.label}</div>
                    <div className='paragraph'>{CardDataOne.paragraph}</div>
                </div>

                <div className="info__card__container">
                    <div className='icon'>{CardDataTwo.icon}</div>
                    <div className='label'>{CardDataTwo.label}</div>
                    <div className='paragraph'>{CardDataTwo.paragraph}</div>
                </div>

                <div className="info__card__container">
                    <div className='icon'>{CardDataThree.icon}</div>
                    <div className='label'>{CardDataThree.label}</div>
                    <div className='paragraph'>{CardDataThree.paragraph}</div>
                </div>
            </div> 
        </div>
    )
}

export default Info
