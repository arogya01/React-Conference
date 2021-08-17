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
  WebsiteLogo,
  Logo,
  Links
} from "./Footer.Elements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        
        <NewsletterSection>
          <NewsletterHead>Register for the Event Today</NewsletterHead>
          <NewsletterInput name="email" placeholder="your email" />
          
          <WebsiteLogo>
            <Logo />
            React Conf
          </WebsiteLogo>
        </NewsletterSection>
        <Links>
        
        <FooterLinks>
          <LinkItem>
            <FooterLink to='/Speakers'>Speakers</FooterLink>
          </LinkItem>
          <LinkItem>
            <FooterLink to='/Schedule'>Schedule</FooterLink>
          </LinkItem>
          <LinkItem>
            <FooterLink to='/COC'>Code of Conduct</FooterLink>
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
        </Links>
      </FooterContainer>
    </>
  );
};

export default Footer;
