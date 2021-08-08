import styled from "styled-components";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { Link } from "react-router-dom";

// export const NavbarContainer=styled.div`

// display:flex;
// justify-content: center;
// align-items:center;

// `

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
  padding: 0 125px;
  flex-flow: row nowrap;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    padding: 0;
    justify-content: space-around;
  }
`;

export const NavLogo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-self: flex-start;
  height: 100%;
  padding: 24px 0;
`;
export const Logo = styled(AiTwotoneThunderbolt)`
  margin-right: 0%.5px;
`;

export const HamburgerIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    padding: 24px 0;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  list-style: none;
  height: 100%;
  padding: 0 125px;

  @media screen and (max-width: 960px) {
    display: ${({ click }) => (click ? "flex" : "none")};
    flex-flow: column wrap;
    width: 100%;
    padding: 0;
  }
`;

export const NavItem = styled.li`
  padding: 24px 24px;
  background-color: #e76b74;

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
  color: #fff;
`;
