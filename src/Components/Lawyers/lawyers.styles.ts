import styled from "@emotion/styled";
import { Avatar, Box } from "@mui/material";

export const Container = styled(Box)`
  background: #0C63B2; 
  background: linear-gradient(to right, #0C63B2,#d9e9f7);
  margin-top: 3rem;
  padding: 2rem;


  @media (max-width: 600px) {
    h3 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 450px) {

    h5 {
      font-size: 1rem;
    }
    
    h3 {
      font-size: 2rem;
    }
  }
 
`;

export const StyledAvatar = styled(Avatar)`
  width: 256px; 
  height: 256px;
  margin-left: 55px;

  @media (max-width: 992px) {

    width: 206px; 
    height: 206px;
    margin: 0 auto;
  }

  @media (max-width: 600px) {

    width: 186px; 
    height: 186px;
    margin: 0 auto;
  }

  @media (max-width: 450px) {

    width: 156px; 
    height: 156px;
    margin: 0 auto;
  }
`;