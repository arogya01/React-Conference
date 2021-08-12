import React from 'react';
import {CardContainer,CardImg,CardContent} from './Card.Elements';


export const Card = ({Content,imgSrc}) => {
    return (
        <>
         <CardContainer>
             <CardImg  src={imgSrc}/>
             <CardContent>{Content}</CardContent>
         </CardContainer>
        </>
    )
}


