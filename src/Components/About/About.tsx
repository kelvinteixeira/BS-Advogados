import React from "react";

import DireitoPrevidenciario from "../../Assets/direitoCivil.jpg";
import DireitoDoTrabalho from "../../Assets/direitoDoTrabalho.jpg";
import DireitoCivil from "../../Assets/direitoCivil.jpg";
import { Divider, Grid, Tooltip, Typography } from "@mui/material";
import * as Styled from "./about.styles";
import { AiOutlineArrowUp } from "react-icons/ai";

export function About() {
  
  return (
    <Styled.Container>
      <Typography variant="h4" align="center">
        Sobre a BS Advogados
      </Typography>
      <Styled.BoxContent>
        <Typography variant="button" align="center">
          O escritório BS Advogados é qualificado com experiência em diversas
          áreas do Direito. Buscamos garantir o melhor resultado, com agilidade
          e atendimento de excelência aos nossos clientes.
        </Typography>
      </Styled.BoxContent>

      <Typography variant="h4" align="center" marginBottom={3}>
        Nossa especialização
      </Typography>

      <Grid container alignItems="center" justifyContent="space-around">
        <Grid item xs={3} textAlign="center">
          <Typography variant="h5">Direito Civil</Typography>

          <img src={DireitoCivil} alt="" />

          <Typography variant="body2" align="center">
            Direito Civil O Direito Civil pode ser entendido como o “direito do
            cidadão”. Lida com problemas de vida e morte da pessoa, dos deveres
            e direitos nos contratos, relação com propriedade, casamento entre
            outras.
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={3} textAlign="center">
          <Typography variant="h5">Direito Previdenciário</Typography>

          <img src={DireitoPrevidenciario} alt="" />

          <Typography variant="body2" align="center">
            Direito Previdenciário Atuação do direito público, voltada às
            questões relacionadas à previdência social e, de certa forma, à
            seguridade social: direitos relativos à saúde, à previdência e à
            assistência social.
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={3} textAlign="center">
          <Typography variant="h5"> Direito do Trabalho</Typography>

          <img src={DireitoDoTrabalho} alt="" />

          <Typography variant="body2" align="center">
            Direito do Trabalho Responsável por regular a relação entre
            trabalhadores e empregadores, baseado nos princípios e leis
            trabalhistas. Importante para garantir o sustento do trabalhador.
            sua proteção e segurança.
          </Typography>
          <Divider />
        </Grid>
      </Grid>

      
    </Styled.Container>
  );
}
