import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiTwotoneThunderbolt } from "react-icons/ai";

export const Logo = styled(AiTwotoneThunderbolt)`
  margin-right: 0 0.5px;
`;

export const WebsiteLogo = styled.h1`
  display: flex;
  flex: row nowrap;
  font-size: 2.4rem;
  padding-top: 5.6rem;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 6.6rem 12.4rem;
  background-color: #e76b74;
  color: #fff;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 6.6rem 6.6rem;
  }

  @media screen and (max-width: 767px) {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    padding: 2.4rem;
  }
`;

export const NewsletterSection = styled.section`
  display: flex;
  flex-flow: Column wrap;

  @media screen and (max-width: 767px) {
    padding-bottom: 2.4rem;
  }
`;
export const NewsletterHead = styled.h3`
  font-size: 1.8rem;

  padding-bottom: 2.4rem;
`;

export const NewsletterInput = styled.input`
  border: none;
  border-bottom: 1px solid #000;
  background-color: #e76b74;
  font-size: 1.6rem;
  width: 250px;
  padding-bottom: 0.5rem;

  ::placeholder {
    color: #fff;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export const FooterLinks = styled.section`
  display: flex;
  flex-flow: column wrap;
  padding: 0 3.6rem;

  @media screen and (max-width: 767px) {
    padding: 0;
  }
`;

export const SocialLinks = styled.section`
  display: flex;
  flex-flow: column wrap;
  padding: 0 3.6rem;

  @media screen and (max-width: 767px) {
    padding: 0;
  }
`;

export const LinkItem = styled.p`
  padding: 2rem;

  @media screen and (min-width: 768px) and (max-width: 1000px) {
    padding: 1rem;
  }
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  font-weight: normal;
  font-size: 1.6rem;
  color: #fff;
`;
