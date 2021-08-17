import React from "react";
import {
  SpeakerSectionContainer,
  SpeakerHeader,
  SpeakerCardContainer,
} from "./SpeakerSection.Elements";
import { SpeakerCard } from "../SpeakerCard/SpeakerCard";

const SpeakerSection = ({ headerText, cardContent }) => {
  return (
    <>
      <SpeakerSectionContainer>
        <SpeakerHeader>{headerText}</SpeakerHeader>
        <SpeakerCardContainer>
          {cardContent.map((card) => {
            console.log(card);
            return (
              <SpeakerCard
                key={card.name}
                imgSrc={card.img}
                name={card.name}
                contact={card.contact}
                topic={card.topic}
                description={card.description}
              />
            );
          })}
        </SpeakerCardContainer>
      </SpeakerSectionContainer>
    </>
  );
};

export default SpeakerSection;
