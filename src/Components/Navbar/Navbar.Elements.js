import styled from 'styled-components';
import {AiTwotoneThunderbolt} from 'react-icons/ai';


export const NavbarContainer=styled.div`

display:flex;
justify-content: center;
align-items:center;
background-color: #5F5B6B;
color:white;

`

export const NavbarElements=styled.nav`

display:flex;
flex-flow:row nowrap;
width:100%;
padding: 0 120px;
justify-content: space-between;

`

export const NavLogo=styled.div`
display:flex;

flex-flow:row nowrap;
align-self:flex-start;
padding: 24px 0;
`
export const Logo=styled(AiTwotoneThunderbolt)`
margin-right: 0%.5px;
`

export const NavLinks=styled.div`
display: flex;
flex-flow:row nowrap;
justify-content: center;
height:100%;

`
export const NavLink=styled.div`
padding:24px 24px;
background-color: #E76B74;

&:hover{
    background-color:#df3a45;
}
`