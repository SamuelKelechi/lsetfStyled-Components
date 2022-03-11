import React from 'react'
import img1 from './css.png'
import {
    MainContain,
    CardHold,
    ImageHold,
    Header,
    Para
} from './CardStyle'


const Card = (props) => {
    return(
        
        <MainContain>
            <CardHold>
                <ImageHold src={img1}/>
                <Header>{props.Heading}</Header>
                <Para>{props.paragraph}</Para>
            </CardHold>
        </MainContain>        
        
    )
}

export default Card
