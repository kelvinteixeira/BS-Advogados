import { Button } from '@mui/material';
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