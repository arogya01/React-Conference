import React from "react";
import {
  FooterContainer,
  NewsletterSection,
  NewsletterHead,
  NewsletterInput,
  FooterLinks,
  SocialLinks,
  LinkItem,
  FooterLink,
} from "./Footer.Elements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <NewsletterSection>
          <NewsletterHead>Register for the Event Today</NewsletterHead>
          <NewsletterInput name="email" placeholder="your email" />
        </NewsletterSection>
        <FooterLinks>
          <LinkItem>
            <FooterLink>Speakers</FooterLink>
          </LinkItem>
          <LinkItem>
            <FooterLink>Schedule</FooterLink>
          </LinkItem>
          <LinkItem>
            <FooterLink>Code of Conduct</FooterLink>
          </LinkItem>
            
        </FooterLinks>
        <SocialLinks>
          <LinkItem>
            <FooterLink>Instagram</FooterLink>
          </LinkItem>
          <LinkItem>
            <FooterLink>Twitter</FooterLink>
          </LinkItem>
          <LinkItem>
            <FooterLink>Facebook</FooterLink>
          </LinkItem>
        </SocialLinks>
      </FooterContainer>
    </>
  );
};

export default Footer;
