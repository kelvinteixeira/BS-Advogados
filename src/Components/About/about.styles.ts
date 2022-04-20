import styled from "@emotion/styled";
import { Box, IconButton } from "@mui/material";

export const Container = styled(Box)`
  margin-top: 3rem;
`;

export const BoxContent = styled(Box)`
  width: 35rem;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 1rem;
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