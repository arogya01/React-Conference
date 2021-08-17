import styled from "styled-components";


export const CardContainer = styled.div`
  width: 30%;
  height: 400px;
  
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding:3.6rem 3.6rem;
  

  @media screen and (max-width: 570px) {
    width: 82%;
    margin: 0;
  }

  @media screen and (min-width: 571px) and (max-width: 1000px) {
    width: 60%;
    margin: 1rem 1rem;
  }
`;

export const CardImg = styled.img`
  max-width: 100%;
  width: auto;
  border-radius: 10px 10px 0 0;
  max-height: 100%;
  height: auto;
`;

export const CardContent = styled.p`
  width: 100%;
  height: 30%;
  font-size: 2.2rem;
  font-weight: normal;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  border-radius:0 0 10px 10px ;

  @media screen and (max-width: 1000px) {
    font-size: 1.8rem;
  }
`;
