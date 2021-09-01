import React from 'react'
import BottomSection from './BottomSection'
import Button from './Button'
import Info from './Info'
import Model from './Model'
import { ModelDataOne } from './ModelData'


function Home() {
    return (
        <section className="home">
            <div className="home-content max-width">
                <h1>Let us find your dream home</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusamus mollitia exercitationem laboriosam distinctio culpa suscipit iste inventore obcaecati nesciunt!</p>
                <Button className='btn' buttonSize='btn__large'>Invest Now!</Button>
            </div>
            <Model {...ModelDataOne}/>
            <Info />
            <BottomSection />
        </section>
    )
}

export default Home
