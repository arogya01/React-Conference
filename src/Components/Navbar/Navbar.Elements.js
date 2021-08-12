import styled from "styled-components";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { Link } from "react-router-dom";


export const NavbarElements = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: space-between;
  background-color: #5f5b6b;
  color: white;
  

  @media screen and (max-width: 960px) {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
  }
`;

export const NavbarHeader = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem 12.4rem;
  flex-flow: row nowrap;
  justify-content: space-between;
  font-size:3.6rem;
  
  
  @media screen and (max-width: 960px) {
    padding: 2rem 6.6rem;
    justify-content: space-between;
  }
  
  @media screen and (max-width:767px){
    padding:2rem 3.2rem;
  }
  `;

export const NavLogo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-self: flex-start;
  height: 100%;
`;

export const Logo = styled(AiTwotoneThunderbolt)`
  margin-right: 0%.5px;
`;

export const HamburgerIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  list-style: none;

  padding: 0 12.4rem;
  
  @media screen and (max-width: 960px) {
    display: ${({ click }) => (click ? "flex" : "none")};
    flex-flow: column wrap;
    width: 100%;
    padding: 0;
  }
  `;

export const NavItem = styled.li`
  padding:2rem;
  background-color: #e76b74;
  font-size:2.4rem;
  

  &:hover {
    background-color: #df3a45;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    background-color: #e76b74;
    text-align: center;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-weight:normal;
  color: #fff;
  
`;
