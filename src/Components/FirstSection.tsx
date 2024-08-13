import { Grid, Typography, useMediaQuery } from "@mui/material";

export const FirstSection = () => {
  const isMobile = useMediaQuery("(max-width:430px)");
  const isTablet = useMediaQuery("(max-width:820px)");
  return (
    <Grid
    padding={2}
      sx={{
        backgroundColor: "#757f9a48",
      }}
    >
      <img
        style={{
          width: "100%",
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
