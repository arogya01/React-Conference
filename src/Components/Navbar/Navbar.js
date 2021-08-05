import React from "react";
import {
  NavbarContainer,
  NavbarElements,
  NavLogo,
  Logo,
  NavLink,
  NavLinks,
} from "./Navbar.Elements";

export default function Navbar() {
  return (
    <>
      <NavbarContainer>
        <NavbarElements>
          <NavLogo>
            <Logo />
            React Conf
          </NavLogo>

          <NavLinks>
            <NavLink>Speakers</NavLink>
            <NavLink>Schdule</NavLink>
            <NavLink>Code of Conduct</NavLink>
          </NavLinks>
        </NavbarElements>
      </NavbarContainer>
    </>
  );
}
