import { Grid, Typography, useMediaQuery } from "@mui/material";

export const FirstSection = () => {
  const isMobile = useMediaQuery("(max-width:430px)");
  const isTablet = useMediaQuery("(max-width:820px)");
  return (
    <Grid
      width={"100%"}
      height={isMobile ? "15vh" : isTablet ? "40vh" : "100vh"}
      sx={{
        backgroundColor: "#757f9a3f",
      }}
    >
      <img
        style={{
          width: "100%",
          height: isMobile ? "15vh" : isTablet ? "40vh" : "100vh",
          objectFit: "cover",
          position: "absolute",
          filter: "blur(5px)",
          top: 0,
          left: 0,
          zIndex: -1,
          content: "",
        }}
        alt=""
        src="../images/bg1.jpg"
      />
      <Grid
        container
        height={isMobile ? "15vh" : isTablet ? "40vh" : "100vh"}
        justifyContent={"center"}
        direction={"column"}
      >
        <Typography
          className="text-gradient"
          fontSize={isMobile ? 30 : isTablet ? 60 : 90}
          align="center"
        >
          B. S. ADVOGADOS
        </Typography>
        <Typography
          fontWeight={"bold"}
          align="center"
          className="text-gradient"
          fontSize={isMobile ? 10 : isTablet ? 20 : 30}
          sx={{
            letterSpacing: 10,
            animation: isMobile ? "" : "slideRight 1s forwards",
          }}
        >
          Escritório de advocacia
        </Typography>
        <Grid container justifyContent={"center"}>
          <img
            style={{
              width: isMobile ? 50 : 150,
            }}
            src="/images/justice.png"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
