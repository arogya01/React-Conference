import { createGlobalStyle } from "styled-components";

import RecoletaRegularWoff from "./Recoleta-Regular.woff";
import RecoletaRegularWoff2 from "./Recoleta-Regular.woff2";

import RecoletaBoldWoff from "./Recoleta-Bold.woff";
import RecoletaBoldWoff2 from "./Recoleta-Bold.woff2";

export const FontStyles = createGlobalStyle`

@font-face {
    font-family: 'Recoleta';
    src: local('Recoleta Alt Regular'), local('RecoletaAlt-Regular'),
        url(${RecoletaRegularWoff}) format('woff'),
        url(${RecoletaRegularWoff2}) format('woff2');
    font-weight: normal;
    font-style: normal;
}



@font-face {
    font-family: 'Recoleta';
    src: local('Recoleta Bold'), local('Recoleta-Bold'),
        url(${RecoletaBoldWoff2}) format('woff2'),
        url(${RecoletaBoldWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
}

`;
