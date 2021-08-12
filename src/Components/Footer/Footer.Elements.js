import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 6.6rem 12.4rem;
  background-color: #e76b74;
`;

export const NewsletterSection = styled.section`
  display: flex;
  flex-flow: Column wrap;
`;
export const NewsletterHead = styled.h3`
  font-size: 1.8rem;
  color:#fff;
  padding-bottom:2.4rem;
`;


export const NewsletterInput = styled.input`
  border: none;
  border-bottom: 1px solid #fff;
  background-color: #e76b74;
  font-size:1.6rem;

::placeholder{
    color:#fff;
}

`;


export const FooterLinks = styled.section`
  display: flex;
  flex-flow: column wrap;
`;

export const SocialLinks = styled.section`
  display: flex;
  flex-flow: column wrap;
`;

export const LinkItem = styled.p`
 padding: 2rem;

 @media screen and (min-width:768px) and (max-width:1000px){
     padding: 1rem;
 }
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: normal;
  font-size:1.6rem;
 
`;
