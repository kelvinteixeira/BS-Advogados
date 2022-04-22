import { Button } from '@mui/material';
import styled from '@emotion/styled'
import { Box } from '@mui/material';

export const Container = styled(Box)`
display: grid;
place-items: center;
height: auto;
margin-top: 1rem;
padding: 2rem;

`;

export const StyledForm = styled(Box)`
  border: .1rem solid #0C63B2;
  width: 30rem;
  height: auto;
  background-color: #fff;
  border-radius: .6rem;
  
`;
export const CardContent = styled(Box)`
display: grid;
place-items: center;
padding: 2rem;

`;

export const StyledButton = styled(Button)`
  border: .1rem solid #00000035;

  :hover {
    border:  .1rem solid #ffffff90;
  }
`;

export const MsgError = styled.span`
  color: red;
  font-size: .7rem !important;
`;

export const InputBox = styled(Box)`
  width: 100%;
  margin-bottom: 1.3rem;
`;