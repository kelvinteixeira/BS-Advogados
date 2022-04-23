import React from "react";
import * as Styled from "./footer.styles";
import {
  AiOutlineFacebook,
  AiOutlineEnvironment,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlinePhone,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Box, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import Logo from "../../Assets/logo.svg";

export function Footer() {
  return (
    <Styled.Footer>
      <Styled.FooterContent>
        <Grid container alignItems="center" justifyContent="space-evenly">
          <Grid item xs={2}>
            <Styled.LogoImg src={Logo} />
          </Grid>

          <Grid item>
            <Box>
              <Typography variant="h6">
                Endereço <AiOutlineEnvironment />{" "}
              </Typography>
              <Typography variant="body2">
                Rua João Machado, 267, Sala 12,
              </Typography>
              <Typography variant="body2">
                Prata, Campina Grande-PB CEP 26758-400
              </Typography>
            </Box>
          </Grid>

          <Grid item>
            <Box>
              <Typography variant="h6">
                Fale Conosco <AiOutlinePhone />
              </Typography>
              <Typography variant="body2">
                (83) 9 9637-3738 - <strong>Dr. João</strong>
              </Typography>
              <Typography variant="body2">
                (83) 9 8733-6830 - <strong>Dra. Amanda</strong>
              </Typography>
              <Typography variant="body2">
                barbosadesousadvogados@gmail.com
              </Typography>
            </Box>
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

            <IconButton
              href="https://api.whatsapp.com/send?phone=5583998453749"
              target="_blank"
              aria-label="whatsapp"
            >
              <AiOutlineWhatsApp color="#000" />
            </IconButton>
          </Grid>
        </Grid>
      </Styled.FooterContent>
    </Styled.Footer>
  );
}
