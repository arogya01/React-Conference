import styled,{createGlobalStyle}  from "styled-components";
import {fonts} from './Fonts/fonts';

export const GlobalStyle=createGlobalStyle`

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Recoleta';
    font-weight: bold;
}
`

export const Container=styled.div`
margin:0 auto;
padding:120px 120px;

`