import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineTwitter,
} from "react-icons/ai";
import * as Styled from "./Header.styles";
import Logo from "../../Assets/logo.svg";

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
        window.open(
          "https://api.whatsapp.com/send?phone=5583998453749",
          "_blank"
        );
        break;
      case "email":
        window.open("barbosadesousadvogados@gmail.com", "_blank");
        break;
      default:
        window.alert("Rede social não existente");
    }
  }

  return (
    <Styled.Container>
      <Grid container alignItems="center" justifyContent="space-evenly">
        <Grid item xs={2}>
          <Styled.LogoImg src={Logo} />
        </Grid>

        <Grid item xs={4}>
          <Grid container justifyContent="space-around">
            <Styled.StyledButton variant="outlined">
              <Typography variant="body1" color="#000">
                Home
              </Typography>
            </Styled.StyledButton>

            <Styled.StyledButton variant="outlined">
              <Typography variant="body1" color="#000">
                Quem somos
              </Typography>
            </Styled.StyledButton>

            <Styled.StyledButton variant="outlined">
              <Typography variant="body1" color="#000">
                Blog
              </Typography>
            </Styled.StyledButton>

            <Styled.StyledButton variant="outlined">
              <Typography variant="body1" color="#000">
                Contato
              </Typography>
            </Styled.StyledButton>
          </Grid>
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
    </Styled.Container>
  );
}
