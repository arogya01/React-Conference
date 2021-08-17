import styled from "styled-components";

export const SpeakerSectionContainer = styled.div`
 width:100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  padding: 8rem 5.6rem;
  background-color: #3D3B3C;

  @media screen and (min-width:768px) and (max-width:1000px){
    padding:4rem 2.4rem;

  }


`;

export const SpeakerHeader = styled.h1`
  font-size: 3.6rem;
  color: #fff;
  padding-bottom: 6rem;

  @media screen and (max-width: 1000px) {
    padding-bottom: 3.2rem;
  }
`;


export const SpeakerCardContainer=styled.div`
 display:flex;
 flex-flow:column wrap;
 justify-content: center;
 align-items: center;

 @media screen and (min-width:768px) and (max-width:850px){
   flex-flow:column nowrap;
 }

 
`

