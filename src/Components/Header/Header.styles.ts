import { Button, IconButton } from '@mui/material';
import styled from '@emotion/styled'
import { Box } from '@mui/material';

export const Container = styled(Box)`
background: #0C63B2; 
background: linear-gradient(to right, #0C63B2,#d9e9f7);
height: 6rem;
`;

export const StyledButton = styled(Button)`
  border: .1rem solid #00000035;
  color: #fff;

  :hover {
    border:  .1rem solid #ffffff90;
  }
`;

export const LogoImg = styled.img`
  width: 6rem;
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

export const WhatsappButton = styled(Button)`
  position: fixed;
  top: 10;
  left: 0;
  margin: .3rem;
`;

export const WhatsappIconButton = styled(Button)`
  position: fixed;
  bottom: 1;
  left: 0;
  display: none;
`;

export const WhatsAppImage = styled.img`
  width: 130px;
`;

export const WhatsAppIcon = styled.img`
  width: 45px;
`;