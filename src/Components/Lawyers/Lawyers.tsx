import React from "react";

import { Avatar, Grid, IconButton, Typography } from "@mui/material";
import * as Styled from "./lawyers.styles";
import JoaoImage from "../../Assets/joao.jpg";
import AmandaImage from "../../Assets/amanda.jpg";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineTwitter,
} from "react-icons/ai";

export function Lawyers() {
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
      <Typography variant="h4" align="center" marginBottom={3}>
        Quem somos
      </Typography>

      <Grid container justifyContent="space-evenly">
        <Grid item textAlign="center">
          <Typography variant="h5" marginBottom={2}>
            Dr. João Vitor Barbosa de Sousa
          </Typography>
          <Styled.StyledAvatar alt="Joao" src={JoaoImage} />

          <Typography variant="overline">
            Frase impactante que gosta de relembrar
          </Typography>

          <Typography variant="body1" marginBottom={2}>
            OAB/PB 24016
          </Typography>

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

        <Grid item textAlign="center">
          <Typography variant="h5" align="center" marginBottom={2}>
            Dra. Amanda Barbosa de Sousa
          </Typography>
          <Styled.StyledAvatar alt="Amanda" src={AmandaImage} />
          <Typography variant="overline">
            Frase impactante que gosta de relembrar
          </Typography>
          <Typography variant="body1" marginBottom={2}>
            OAB/PB 24033
          </Typography>
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
      </Grid>
    </Styled.Container>
  );
}
