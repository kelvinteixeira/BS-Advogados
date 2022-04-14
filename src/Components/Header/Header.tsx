import React from "react";
import { Divider, Grid, IconButton } from "@mui/material";
import { StyledBox } from "./Header.styles";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineMail,
} from "react-icons/ai";
import * as Styled from "./Header.styles";

export function Header() {
  function generatePath(value: string) {
    switch (value) {
      case "instagram":
        window.open("https://www.instagram.com/bsadvogadoss/", "_blank");
        break;
      case "facebook":
        window.open("https://www.instagram.com/bsadvogadoss/", "_blank");
        break;
      case "linkedin":
        window.open("https://www.instagram.com/bsadvogadoss/", "_blank");
        break;
      case "email":
        window.open("https://www.instagram.com/bsadvogadoss/", "_blank");
        break;
    }
  }

  return (
    <>
      <StyledBox sx={{ width: "100%" }}>
        <Grid container alignItems="center">
          <Grid item xs={3}>
            LOGOIMAGE
          </Grid>

          <Grid item xs={1}>
            <Styled.StyledButton variant="outlined" color="inherit">
              Home
            </Styled.StyledButton>
          </Grid>
          <Grid item xs={1}>
            <Styled.StyledButton variant="outlined" color="inherit">
              About
            </Styled.StyledButton>
          </Grid>
          <Grid item xs={1}>
            <Styled.StyledButton variant="outlined" color="inherit">
              Blog
            </Styled.StyledButton>
          </Grid>
          <Grid item xs={3}>
            <Styled.StyledButton variant="outlined" color="inherit">
              Contact
            </Styled.StyledButton>
          </Grid>

          <Grid item>
            <IconButton
              onClick={() => generatePath("instagram")}
              aria-label="instagram"
            >
              <AiOutlineInstagram />
            </IconButton>
            <IconButton
              onClick={() => generatePath("linkedin")}
              aria-label="delete"
            >
              <AiOutlineLinkedin />
            </IconButton>
            <IconButton
              onClick={() => generatePath("facebook")}
              aria-label="delete"
            >
              <AiOutlineFacebook />
            </IconButton>
            <IconButton
              onClick={() => generatePath("email")}
              aria-label="delete"
            >
              <AiOutlineMail />
            </IconButton>
          </Grid>
        </Grid>
      </StyledBox>
      <Divider />
    </>
  );
}
