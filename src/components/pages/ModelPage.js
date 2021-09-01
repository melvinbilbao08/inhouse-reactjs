import React from 'react'
import BottomSection from '../BottomSection'
import Model from '../Model'
import { ModelDataOne, ModelDataFour, ModelDataThree, ModelDataTwo } from '../ModelData'

function ModelPage() {
    return (
        <>
        <h1 className='model-title max-width' style={{paddingTop: '5em', color: '#30464b', textAlign: 'center'}}>Model House Listing</h1>
        <Model {...ModelDataOne} />
        <Model {...ModelDataTwo} />
        <Model {...ModelDataThree}/>
        <Model {...ModelDataFour}/>
        <BottomSection />
        </>
    )

}

export default ModelPage
