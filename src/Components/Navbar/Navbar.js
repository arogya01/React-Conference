import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {

  NavbarElements,
  NavLogo,
  Logo,
  NavLink,
  NavLinks,
  HamburgerIcon,
  NavItem,
  NavbarHeader
} from "./Navbar.Elements";

export default function Navbar() {
  const [click, setClick] = useState(false);
 
  console.log(click);
  
  const handleClick = () => {
    setClick(!click);
    console.log(click);
  };

  return (
    <>
     

        <NavbarElements>

        <NavbarHeader>
          <NavLogo>
            <Logo />
            React Conf
          </NavLogo>

          <HamburgerIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </HamburgerIcon>

        </NavbarHeader>

          <NavLinks click={click}>
            <NavItem>
              <NavLink>Speakers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Schedule</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>COC</NavLink>
            </NavItem>
          </NavLinks>
        </NavbarElements>
     
    </>
  );
}
