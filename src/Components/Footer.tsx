import {
  Box,
  Divider,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export const Footer = () => {
  const isMobile = useMediaQuery("(max-width:430px)");
  const isTablet = useMediaQuery("(max-width:820px)");
  return (
    <Grid
      container
      justifyContent={"center"}
      direction={"column"}
      alignItems={"center"}
      bottom={0}
      sx={{
        background: "linear-gradient(to top, #000000, #d7dde8)",
        position: "relative",
      }}
    >
      <img style={{ width: 100 }} src="/images/logo.png" />
      <Grid container justifyContent={"center"}>
        <IconButton href={""} target="_blank" aria-label="instagram">
          <AiOutlineInstagram color="#d3caca" />
        </IconButton>
        <IconButton href={""} target="_blank" aria-label="linkedin">
          <AiOutlineLinkedin color="#d3caca" />
        </IconButton>
        <IconButton href={""} target="_blank" aria-label="facebook">
          <AiOutlineFacebook color="#d3caca" />
        </IconButton>
        <IconButton onClick={() => window.open("")} aria-label="email">
          <AiOutlineMail color="#d3caca" />
        </IconButton>

        <IconButton href={""} target="_blank" aria-label="whatsapp">
          <AiOutlineWhatsApp color="#d3caca" />
        </IconButton>
      </Grid>
      <Box sx={{ width: "80vw", borderBottom: "1px solid #d3caca" }} />
      <Typography
        align="center"
        color={"#d3caca"}
        margin={2}
        fontSize={isMobile ? 10 : isTablet ? 15 : 20}
      >
        © 2024 B. S. Advogados. Todos os direitos reservados.
      </Typography>
    </Grid>
  );
};
