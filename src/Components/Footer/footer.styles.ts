import styled from "@emotion/styled";
import { Box, IconButton } from "@mui/material";

export const Footer = styled(Box)`
  background: #0C63B2; 
background: linear-gradient(to right, #0C63B2,#d9e9f7);
  height: 9rem;
`;

export const FooterContent = styled(Box)`
  margin-top: 3rem;
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