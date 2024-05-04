import { Grid, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";

export const AboutBS = () => {
  const isMobile = useMediaQuery("(max-width:430px)");
  const isTablet = useMediaQuery("(max-width:820px)");

  return (
    <Grid padding={2} sx={{ background: "#f7f1f1" }}>
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography fontSize={isMobile ? 25 : isTablet ? 40 : 60}>
          Sobre a B. S. Advogados
        </Typography>

        <Grid item xs={12}>
          <Grid sx={{ overflow: "hidden", textOverflow: "ellipsis" }}>
            <Typography align="justify" marginBottom={1}>
              O escritório de advocacia B.S. Advogados, localizado no centro da
              cidade, destaca-se pela dedicação em fornecer serviços jurídicos
              de excelência. Sua equipe especializada oferece soluções
              personalizadas, realizando uma análise minuciosa de cada caso para
              proteger os interesses dos clientes. No ambiente acolhedor do
              escritório, cada cliente é recebido com atenção, buscando-se
              fornecer orientação jurídica sólida e eficaz em cada etapa do
              processo.
            </Typography>
            <Typography align="justify" marginBottom={1}>
              Mais do que representar clientes perante a lei, o foco está em
              construir relacionamentos de confiança, garantindo tranquilidade e
              segurança. Com uma abordagem holística e determinada, o objetivo é
              proporcionar resultados positivos e satisfatórios, resolvendo
              desafios legais de forma eficiente. Venha conhecer a B.S.
              Advogados e descubra como podemos ajudá-lo a alcançar seus
              objetivos jurídicos com sucesso.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent={"space-around"}>
        <img
          style={{
            height: isMobile ? 150 : isTablet ? 200 : 300,
            width: isMobile ? "100%" : "30%",
            border: "1px solid #fff",
            borderRadius: 5,
            marginBottom: 5,
          }}
          src="images/equipe2.jpg"
        />
        <img
          style={{
            height: isMobile ? 150 : isTablet ? 200 : 300,
            width: isMobile ? "100%" : "30%",
            border: "1px solid #fff",
            borderRadius: 5,
            marginBottom: 5,
          }}
          src="images/equipe3.jpg"
        />
        <img
          style={{
            height: isMobile ? 150 : isTablet ? 200 : 300,
            width: isMobile ? "100%" : "30%",
            border: "1px solid #fff",
            borderRadius: 5,
          }}
          src="images/equipe4.jpg"
        />
      </Grid>
    </Grid>
  );
};
