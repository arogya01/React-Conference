import React from "react";
import { HeroText, HeroButton, HeroContainer } from "./HeroSection.Elements";

const HeroSection = ({ HeroSectionDescription }) => {
  return (
    <>
      <HeroContainer>
        <HeroText>{HeroSectionDescription}</HeroText>
        <HeroButton>Book Your Tickets</HeroButton>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
