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
  return (
    <Styled.Container>
      <Typography variant="h3" align="center" marginBottom={3}>
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
              href="https://www.instagram.com/joaovitor.bs.adv/"
              target="_blank"
              aria-label="instagram"
            >
              <AiOutlineInstagram color="#000" />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/jo%C3%A3o-v%C3%ADtor-barbosa-de-sousa-24ab63226/"
              target="_blank"
              aria-label="linkedin"
            >
              <AiOutlineLinkedin color="#000" />
            </IconButton>
            <IconButton
              href="https://www.facebook.com/joaovitor.barbosadesousa"
              target="_blank"
              aria-label="facebook"
            >
              <AiOutlineFacebook color="#000" />
            </IconButton>
            <IconButton
              onClick={() => window.open("mailto:joao_vitor_72@hotmail.com")}
              aria-label="email"
            >
              <AiOutlineMail color="#000" />
            </IconButton>

            <IconButton
              href="https://api.whatsapp.com/send?phone=5583996373738"
              target="_blank"
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
              href="https://www.instagram.com/amandab.adv/"
              target="_blank"
              aria-label="instagram"
            >
              <AiOutlineInstagram color="#000" />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/amanda-barbosa-117780190/"
              target="_blank"
              aria-label="linkedin"
            >
              <AiOutlineLinkedin color="#000" />
            </IconButton>
            <IconButton
              href="https://www.facebook.com/amanda.barbosa.20"
              target="_blank"
              aria-label="facebook"
            >
              <AiOutlineFacebook color="#000" />
            </IconButton>
            <IconButton
              onClick={() => window.open("mailto:amanda.bs.132@gmail.com")}
              aria-label="email"
            >
              <AiOutlineMail color="#000" />
            </IconButton>
            <IconButton
              href="https://api.whatsapp.com/send?phone=5583987336830"
              target="_blank"
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
