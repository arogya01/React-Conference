import styled from "styled-components";

export const SpeakerContainer = styled.div`
  width:100%;
  display: flex;
  flex-flow: row wrap;
  background-color: #3D3B3C;
  padding:4.8rem 0;

  @media screen and (max-width:850px){
    display:flex;
    flex-flow:column wrap;
    justify-content: center;
    align-items: center;
  }

 
`;

export const SpeakerImgContainer = styled.div`
  
  width: 250px;
  height: 250px;
  background-color: black;
  border-radius: 50%;
  margin-right:-120px;
  z-index: 2;

 

@media screen and  (min-width:360px) and (max-width:850px){
  margin-right:0;
 margin-bottom:-110px;
}

`;

export const SImg = styled.img`
  object-fit: cover;
  width:100%;
  height: 100%;
  border-radius: 50%;
`;

export const SpeakerDescriptionContainer = styled.div`
  width: 650px;
  height: 250px;
  background-color: #e76b74;
  z-index: 1;
  border-radius: 10px;
  color: #fff;
  display: flex;
  flex-flow: column nowrap;
  align-items:center;
  justify-content: center;
  

  /* @media screen and  (min-width:768px) and (max-width:1000px){
   width:450px;
} */
  @media screen and  (min-width:360px) and (max-width:850px){
   width:250px;
   padding-top: 10rem;
   height:500px;
   
}

&:hover{
  background-color:#e55b64;
}
`;

export const Name = styled.h1`
  font-size: 2.2rem;
  padding: 1rem 0 1rem 13rem;

  @media screen and (max-width:850px){
    text-align:center;
    padding:1rem;

  }
  
`;
export const Contact = styled.h3`
  font-size: 1.6rem;
  padding: 1rem 0 1rem 13rem;
  font-weight:normal;

  @media screen and (max-width:850px){
    text-align:center;
    padding:1rem;

  }

`;
export const Topic = styled.p`
  font-size: 2rem;
  padding: 1rem 0 1rem 13rem;

  @media screen and (max-width:850px){
    text-align:center;
    padding:1rem;
    
  }
`;
export const Description = styled.p`
  font-size: 1.2rem;
  padding: 2rem 0 1rem 12rem;
  line-height: 1.5;
  font-weight:normal;
  text-align:center;

  @media screen and (max-width:850px){
    text-align:center;
    padding:1rem 2rem 0 2rem;
  }
`;
