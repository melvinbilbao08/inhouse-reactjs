import React from 'react'
import '../styles/main.scss'
import Button from './Button'


function Model({modelName, info, modelImg, location}) {
            

    return (
        <section className="model">
            {/* <h1 className="title">SAMPLE MODEL HOUSE</h1> */}
            <div className="model-content max-width">
                <div className="leftSide">
                    <h2>{modelName}</h2>
                    <h5>{location}</h5>
                    <p>{info}</p>
                    <Button className='btn' buttonSize='btn__medium'>View Home 
                    <i className="fas fa-long-arrow-alt-right"></i></Button>
                </div>
                <div className="rightSide">
                    <img src={modelImg} alt="Allmodcons Grey Hill" />

                </div>
            </div>
        </section>
    )
}

export default Model   