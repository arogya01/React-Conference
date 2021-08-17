import React from "react";
import {
  SpeakerContainer,
  SpeakerImgContainer,
  SpeakerDescriptionContainer,
  SImg,
  Name,
  Contact,
  Topic,
  Description
} from "./SpeakerCard.Elements";

export const SpeakerCard = ({imgSrc,name,contact,topic,description}) => {
  return (
    <>
      <SpeakerContainer>
        <SpeakerImgContainer>
          <SImg src={imgSrc}></SImg>  
        </SpeakerImgContainer>

        <SpeakerDescriptionContainer>
          <Name>{name}</Name>
          <Contact>{contact}</Contact>
          <Topic>{topic}</Topic>
          <Description>{description}</Description>
        </SpeakerDescriptionContainer>
        
      </SpeakerContainer>
    </>
  );
};


