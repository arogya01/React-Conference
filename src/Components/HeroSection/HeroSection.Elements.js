import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  flex-flow: column wrap;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 12.5rem 12.5rem;
  background-color: #3d3b3c;
  color: white;
  text-transform: uppercase;

  @media screen and (max-width: 767px) {
    padding: 3.2rem 3.2rem;
  }
  
  @media screen and (min-width:768px) and (max-width:1000px){
      padding:8rem 6.6rem;
  }
`;

export const HeroText = styled.h1`
  font-size: 4.5rem;
  font-weight: bold;
  padding-bottom: 5rem;

  @media screen and (max-width: 767px) {
    font-size: 3.2rem;

  }
  
`;

export const HeroButton = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #e76b74;
  font-size: 2rem;
  padding: 1rem 0.5rem;
  color: #fff;
  cursor: pointer;
  width: 50%;

&:hover{
  background-color:#e55b64;
}
`;
