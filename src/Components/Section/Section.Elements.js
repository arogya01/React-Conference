import styled from "styled-components";

export const SectionContainer = styled.div`
  padding: 8rem 4rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => (bgColor ? "#323031" : "#3D3B3C")};

  @media screen and (max-width: 1000px) {
    padding: 3.2rem 3.2rem;
  }

`;

export const SectionHeader = styled.h1`
  font-size: 3.6rem;
  color: #fff;
  padding-bottom: 6rem;

  @media screen and (max-width: 1000px) {
    padding-bottom: 3.2rem;
  }
`;
export const SectionCardContainer = styled.div`
  display:flex;
  //grid-template-columns: 30% 30% 30%;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
`;
