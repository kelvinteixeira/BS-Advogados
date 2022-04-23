import styled from "@emotion/styled";
import { Box, IconButton } from "@mui/material";

export const Container = styled.main`
  display: grid;
  place-items: center;
  margin-top: 3rem;

  @media (max-width: 530px) {
   h3{
    font-size: 2.5rem;
   } 
  } 
   @media (max-width: 430px) { 
   h3{
    font-size: 2.2rem;
   }  
   }
`;

export const BoxContent = styled(Box)`
  padding: 2rem;
  text-align: center;
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

