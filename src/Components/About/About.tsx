import React from "react";

import DireitoPrevidenciario from "../../Assets/DireitoPrevidenciario.png";
import DireitoDoTrabalho from "../../Assets/DireitoDoTrabalho.png";
import DireitoCivil from "../../Assets/DireitoCivil.png";
import { Box, Divider, Grid, Typography } from "@mui/material";
import * as Styled from "./about.styles";

export function About() {
  return (
    <Styled.Container>
      <Typography variant="h3" align="center">
        BS Advogados
      </Typography>
      <Styled.BoxContent>
        <Typography className="message" fontSize={12} align="center">
          O escritório BS Advogados é qualificado com experiência em diversas
          áreas do Direito. Buscamos garantir o melhor resultado, com agilidade
          e atendimento de excelência aos nossos clientes.
        </Typography>
      </Styled.BoxContent>

      <Typography variant="h5" align="center" marginBottom={3}>
        Nossa especialização
      </Typography>

      <Grid
        id="content-container"
        container
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Grid id="card-container" item xs={3} textAlign="center">
          <Box id="card">
            <Box id="card-wrapper">
              <Typography variant="h6">Direito Civil</Typography>
              <img src={DireitoCivil} alt="" />
            </Box>
          </Box>
          <Box>
            <Typography
              id="card-text"
              variant="body2"
              align="center"
              marginBottom={1}
            >
              O Direito Civil pode ser entendido como o “direito do cidadão”.
              Lida com problemas de vida e morte da pessoa, dos deveres e
              direitos nos contratos, relação com propriedade, casamento entre
              outras.
            </Typography>
            <Divider />
          </Box>
        </Grid>

        <Grid id="card-container" item xs={3} textAlign="center">
          <Box id="card">
            <Box id="card-wrapper">
              <Typography variant="h6">Direito Previdenciário</Typography>
              <img src={DireitoPrevidenciario} alt="" />
            </Box>
          </Box>

          <Box>
            <Typography
              id="card-text"
              variant="body2"
              align="center"
              marginBottom={1}
            >
              Direito Previdenciário atua no direito público, voltada às
              questões relacionadas à previdência social e, de certa forma, à
              seguridade social: direitos relativos à saúde, à previdência e à
              assistência social.
            </Typography>
            <Divider />
          </Box>
        </Grid>

        <Grid id="card-container" item xs={3} textAlign="center">
          <Box id="card">
            <Box id="card-wrapper">
              <Typography variant="h6"> Direito do Trabalho</Typography>
              <img src={DireitoDoTrabalho} alt="" />
            </Box>
          </Box>

          <Box>
            <Typography
              id="card-text"
              variant="body2"
              align="center"
              marginBottom={1}
            >
              Direito do Trabalho é Responsável por regular a relação entre
              trabalhadores e empregadores, baseado nos princípios e leis
              trabalhistas. Garante o sustento, proteção e
              segurança entre ambas.
            </Typography>
            <Divider />
          </Box>
        </Grid>
      </Grid>
    </Styled.Container>
  );
}
