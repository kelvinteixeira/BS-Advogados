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
  width: 32rem;
  height: auto;
  background-color: #fff;
  border-radius: .6rem;

  @media (max-width: 768px) {
    
    
    h3 {
      font-size: 2rem;
    }
    
    width: 29rem;
    
  }
  
  @media (max-width: 600px) {

     h3 {
      font-size: 1.6rem;
    }
    width: 25rem;
  }

  @media (max-width: 450px) {

     h3 {
      font-size: 1.1rem;
    }
    width: 20rem;
 
  }
  @media (max-width: 380px) {

     h3 {
      font-size: 1.1rem;
    }
    width: 18rem;
  }
  
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