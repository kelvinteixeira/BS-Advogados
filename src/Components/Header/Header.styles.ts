import { Button } from '@mui/material';
import styled from '@emotion/styled'
import { Box } from '@mui/material';

export const StyledBox = styled(Box)`
  margin: 4rem 4rem 0 6rem;
`;

export const StyledButton = styled(Button)`
  border: 1rem solid white;
  transition: .4s ease-in-out;

  :hover {
    border-bottom:  .1rem solid black;
    border-radius: 0;
  }
`;