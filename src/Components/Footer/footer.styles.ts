import { Container } from './../Header/Header.styles';
import styled from "@emotion/styled";
import { Box, IconButton } from "@mui/material";

export const Footer = styled(Box)`
  background: #0C63B2; 
  background: linear-gradient(to right, #0C63B2,#d9e9f7);
  height: auto;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    text-align: center;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    text-align: center;
    flex-direction: column;
  }

  @media (max-width: 992px) {
    text-align: center;
    flex-direction: column;    
  }
`;

export const FooterContent = styled(Box)`
  margin-top: 3rem;
      
  @media (max-width:  600px){

    margin-top: 0;
    width: 100%;
    height: auto;
    
    div {
      flex-direction:column;
    }

    h6 {
      font-size: 0.9rem;
    }

    p {  
      font-size: .6rem ;
    }

    img {
      display: none;
    }
  }
  @media  (max-width:  768px){

    margin-top: 0;
    height: auto;
    
    div {
      flex-direction:column;
    }

    h6 {
      font-size: 1.2rem;
    }

    p {  
      font-size: .8rem ;
    }

    img {
      display: none;
    }
  }
  @media  (max-width:  992px){

    margin-top: 0;
    height: auto;
    
    div {
      flex-direction:row;
      width: 100%;
    }

    h6 {
      font-size: 1.3rem;
    }

    p {  
      font-size: .9rem ;
    }

    img {
      display: none;
    }
  }
`;

export const LogoImg = styled.img`
  width: 8rem;
  border: 0;
  margin: 0;
  padding: 0;
`;

export const StyledIconButton = styled(IconButton)`
  position: fixed;
  bottom: 0;
  right: 0;
  border-radius: 10rem;
  margin: 1rem;
  color: #fff;
  border: #fff solid 1px;
  background-color: #0C63B280;
  transition: .5s ease-in-out;

  :hover {
    border: 1px solid #0C63B2;
    color: #000;
  }
`;