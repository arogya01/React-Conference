import React from "react";
import { Card } from "../../Components/Card/Card";

import {
  SectionContainer,
  SectionHeader,
  SectionCardContainer,
} from "./Section.Elements";

const Section = ({
  bgColor,
  headerText,
  cardContent
}) => {
  return (
    <>
      <SectionContainer bgColor={bgColor}>
        <SectionHeader>{headerText}</SectionHeader>
        <SectionCardContainer>
         {cardContent.map(card=>{
         return <Card imgSrc={card.img} Content={card.content} />
         })}
        </SectionCardContainer>
      </SectionContainer>
    </>
  );
};

export default Section;