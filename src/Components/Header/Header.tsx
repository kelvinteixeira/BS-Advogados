import React, { useState } from "react";
import { Alert, Grid, IconButton, Snackbar, Tooltip } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { animateScroll as scroll } from "react-scroll";
import WhatappImage from "../../Assets/WhatsApp.svg.webp";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineTwitter,
  AiOutlineArrowUp,
} from "react-icons/ai";
import * as Styled from "./Header.styles";
import Logo from "../../Assets/logo.svg";

export function Header() {
  const [showSnackBar, setShowSnackBar] = useState(false);

  return (
    <Styled.Container>
      <Grid container alignItems="center" justifyContent="space-evenly">
        <Grid item xs={2}>
          <Styled.LogoImg src={Logo} />
        </Grid>

        <Grid item xs={4}>
          <Grid container justifyContent="space-around">
            <Styled.StyledButton
              variant="outlined"
              color="inherit"
              onClick={() => scroll.scrollTo(130)}
            >
              Sobre
            </Styled.StyledButton>

            <Styled.StyledButton
              variant="outlined"
              color="inherit"
              onClick={() => scroll.scrollTo(650)}
            >
              Quem somos
            </Styled.StyledButton>

            <Styled.StyledButton
              variant="outlined"
              color="inherit"
              onClick={() => scroll.scrollTo(1250)}
            >
              Contato
            </Styled.StyledButton>

            <Styled.StyledButton
              variant="outlined"
              color="inherit"
              onClick={() => setShowSnackBar(true)}
            >
              Blog
            </Styled.StyledButton>
          </Grid>
        </Grid>

        <Grid item>
          <IconButton
            href="https://www.instagram.com/bsadvogadoss/"
            target="_blank"
            aria-label="instagram"
          >
            <AiOutlineInstagram color="#000" />
          </IconButton>
          <Tooltip title="Em desenvolvimento">
            <IconButton aria-label="linkedin">
              <AiOutlineLinkedin color="#000" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Em desenvolvimento">
            <IconButton aria-label="facebook">
              <AiOutlineFacebook color="#000" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Em desenvolvimento">
            <IconButton aria-label="twitter">
              <AiOutlineTwitter color="#000" />
            </IconButton>
          </Tooltip>
          <IconButton
            onClick={() =>
              window.open("mailto:barbosadesousadvogados@gmail.com")
            }
            aria-label="email"
          >
            <AiOutlineMail color="#000" />
          </IconButton>
        </Grid>
      </Grid>
      <Tooltip title="Para o topo">
        <Styled.StyledIconButton
          color="inherit"
          onClick={() => scroll.scrollTo(0)}
          size="large"
        >
          <AiOutlineArrowUp />
        </Styled.StyledIconButton>
      </Tooltip>

      <Tooltip title="Fale conosco">
        <Styled.WhatsappButton
          onClick={() =>
            window.open(
              "https://api.whatsapp.com/send?phone=5583998453749",
              "_blank"
            )
          }
        >
          <Styled.WhatsAppImage src={WhatappImage} alt="whatsapp logo" />
        </Styled.WhatsappButton>
      </Tooltip>

      <Snackbar
        open={showSnackBar}
        autoHideDuration={5000}
        onClose={() => setShowSnackBar(false)}
      >
        <Alert severity="error" variant="filled">
          Desculpe o blog se encontra em construção!
        </Alert>
      </Snackbar>
    </Styled.Container>
  );
}
