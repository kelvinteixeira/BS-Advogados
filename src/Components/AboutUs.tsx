import {
  Typography,
  Card,
  CardMedia,
  Grid,
  useMediaQuery,
  IconButton,
  CardContent,
} from "@mui/material";
import { professionals } from "../services/api";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

type ProfessionalProps = {
  name: string;
  oab: number;
  phrase: string;
  photo: string;
  socialMedias: {
    instagram: string;
    linkedin: string;
    facebook: string;
    whatsapp: string;
    email: string;
  };
};

export const AboutUs = () => {
  const isMobile = useMediaQuery("(max-width:430px)");
  const isTablet = useMediaQuery("(max-width:820px)");

  return (
    <Grid
      sx={{
        height: "auto",
        background: "#d7dde8",
      }}
    >
      <Typography
        align="center"
        fontSize={isMobile ? 25 : isTablet ? 40 : 60}
      >
        Quem somos
      </Typography>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"space-around"}
        wrap="wrap"
      >
        {professionals.map((professional: ProfessionalProps) => (
          <Grid key={professional.name}>
            {isMobile ? (
              <Card
                sx={{
                  width: 380,
                  height: 150,
                  display: "flex",
                  background: "#757f9a5f",
                  marginBottom: 1,
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 150 }}
                  image={professional.photo}
                  alt="foto do profissional"
                />
                <CardContent>
                  <Typography fontSize={14} align="center">
                    {professional.name}
                  </Typography>
                  <Typography
                    fontSize={12}
                    align="center"
                    color="text.secondary"
                    fontWeight={"bold"}
                    marginBottom={2}
                  >
                    OAB/PB:{professional.oab}
                  </Typography>
                  <Typography align="center" fontSize={9}>
                    <i>{professional.phrase}</i>
                  </Typography>
                  <Grid container justifyContent={"center"}>
                    <IconButton
                      href={professional.socialMedias.instagram}
                      target="_blank"
                      aria-label="instagram"
                      sx={{ width: 35 }}
                    >
                      <AiOutlineInstagram color="#000" />
                    </IconButton>
                    <IconButton
                      href={professional.socialMedias.linkedin}
                      target="_blank"
                      aria-label="linkedin"
                      sx={{ width: 35 }}
                    >
                      <AiOutlineLinkedin color="#000" />
                    </IconButton>
                    <IconButton
                      href={professional.socialMedias.facebook}
                      target="_blank"
                      aria-label="facebook"
                      sx={{ width: 35 }}
                    >
                      <AiOutlineFacebook color="#000" />
                    </IconButton>
                    <IconButton
                      onClick={() =>
                        window.open(professional.socialMedias.email)
                      }
                      aria-label="email"
                      sx={{ width: 35 }}
                    >
                      <AiOutlineMail color="#000" />
                    </IconButton>

                    <IconButton
                      href={professional.socialMedias.whatsapp}
                      target="_blank"
                      aria-label="whatsapp"
                      sx={{ width: 35 }}
                    >
                      <AiOutlineWhatsApp color="#000" />
                    </IconButton>
                  </Grid>
                </CardContent>
              </Card>
            ) : (
              <Card
                sx={{
                  width: isTablet ? 300 : 400,
                  marginBottom: 2,
                  background: "#757f9a5f",
                }}
              >
                <CardMedia
                  component="img"
                  className="shine"
                  image={professional.photo}
                  title="picture"
                  height={isTablet ? 280 : 350}
                />
                <CardContent sx={{ padding: 1 }}>
                  <Typography align="center" fontSize={isTablet ? 16 : 20}>
                    {professional.name}
                  </Typography>
                  <Typography
                    fontSize={isTablet ? 14 : ""}
                    align="center"
                    color="text.secondary"
                    component="div"
                    fontWeight={"bold"}
                  >
                    OAB/PB {professional.oab}
                  </Typography>
                  <Typography align="center" fontSize={isTablet ? 12 : 14}>
                    <i>{professional.phrase}</i>
                  </Typography>
                  <Grid container justifyContent={"center"}>
                    <IconButton
                      href={professional.socialMedias.instagram}
                      target="_blank"
                      aria-label="instagram"
                    >
                      <AiOutlineInstagram color="#000" />
                    </IconButton>
                    <IconButton
                      href={professional.socialMedias.linkedin}
                      target="_blank"
                      aria-label="linkedin"
                    >
                      <AiOutlineLinkedin color="#000" />
                    </IconButton>
                    <IconButton
                      href={professional.socialMedias.facebook}
                      target="_blank"
                      aria-label="facebook"
                    >
                      <AiOutlineFacebook color="#000" />
                    </IconButton>
                    <IconButton
                      onClick={() =>
                        window.open(professional.socialMedias.email)
                      }
                      aria-label="email"
                    >
                      <AiOutlineMail color="#000" />
                    </IconButton>

                    <IconButton
                      href={professional.socialMedias.whatsapp}
                      target="_blank"
                      aria-label="whatsapp"
                    >
                      <AiOutlineWhatsApp color="#000" />
                    </IconButton>
                  </Grid>
                </CardContent>
              </Card>
            )}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
