import React from "react";
import { Divider, Grid, IconButton } from "@mui/material";
import { StyledBox } from "./Header.styles";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineTwitter,
} from "react-icons/ai";
import * as Styled from "./Header.styles";

export function Header() {
  function socialMediaLink(value: string) {
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
      case "whatsapp":
        window.open("https://api.whatsapp.com/send?phone=5583998453749", "_blank");
        break;
      case "email":
        window.open("barbosadesousadvogados@gmail.com", "_blank");
        break;
      default:
        window.alert("Rede social não existente");
    }
  }

  return (
    <>
      <StyledBox>
        <Grid container alignItems="center" justifyContent="space-around">
          <Grid item xs={3}>
            LOGO IMAGE
          </Grid>

          <Grid item xs={1}>
            <Styled.StyledButton variant="outlined" color="inherit">
              Home
            </Styled.StyledButton>
          </Grid>
          <Grid item xs={1}>
            <Styled.StyledButton variant="outlined" color="inherit">
              Sobre
            </Styled.StyledButton>
          </Grid>
          <Grid item xs={1}>
            <Styled.StyledButton variant="outlined" color="inherit">
              Blog
            </Styled.StyledButton>
          </Grid>
          <Grid item xs={3}>
            <Styled.StyledButton variant="outlined" color="inherit">
              Contato
            </Styled.StyledButton>
          </Grid>

          <Grid item>
            <IconButton
              onClick={() => socialMediaLink("instagram")}
              aria-label="instagram"
            >
              <AiOutlineInstagram color="#000" />
            </IconButton>
            <IconButton
              onClick={() => socialMediaLink("linkedin")}
              aria-label="linkedin"
            >
              <AiOutlineLinkedin color="#000" />
            </IconButton>
            <IconButton
              onClick={() => socialMediaLink("facebook")}
              aria-label="facebook"
            >
              <AiOutlineFacebook color="#000" />
            </IconButton>
            <IconButton
              onClick={() => socialMediaLink("email")}
              aria-label="email"
            >
              <AiOutlineMail color="#000" />
            </IconButton>
            <IconButton
              onClick={() => socialMediaLink("whatsapp")}
              aria-label="whatsapp"
            >
              <AiOutlineTwitter color="#000" />
            </IconButton>
            <IconButton
              onClick={() => socialMediaLink("whatsapp")}
              aria-label="whatsapp"
            >
              <AiOutlineWhatsApp color="#000" />
            </IconButton>
          </Grid>
        </Grid>
      </StyledBox>
      <Divider />
    </>
  );
}
