import { Button, IconButton } from '@mui/material';
import styled from '@emotion/styled'
import { Box } from '@mui/material';

export const Container = styled(Box)`
background: #0C63B2; 
background: linear-gradient(to right, #0C63B2, #fff);
height: 6rem;
`;

export const StyledButton = styled(Button)`
  border: .1rem solid #00000035;

  :hover {
    border:  .1rem solid #ffffff90;
  }
`;

export const LogoImg = styled.img`
  width: 6rem;
  border: 0;
  margin: 0;
  margin-left: 4rem;
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