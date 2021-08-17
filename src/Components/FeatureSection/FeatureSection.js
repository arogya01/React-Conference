import React from "react";
import { Card } from "../../Components/FeatureCard/FeatureCard";

import {
  SectionContainer,
  SectionHeader,
  SectionCardContainer,
} from "./FeatureSection.Elements";

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