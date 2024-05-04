import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Grid, useMediaQuery } from "@mui/material";
import { services } from "../services/api";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const OurServices = () => {
  const isMobile = useMediaQuery("(max-width:430px)");
  const isTablet = useMediaQuery("(max-width:820px)");
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ background: "#f7f1f1" }}>
      <Typography align="center" fontSize={isMobile ? 25 : isTablet ? 40 : 60}>
        Nossas áreas de atuação
      </Typography>
      <Grid
        container
        justifyContent={isMobile ? "center" : "space-around"}
        alignItems={"center"}
        padding={2}
      >
        {services.map((service) => (
          <Card
            sx={{
              maxWidth: 300,
              marginBottom: 2,
            }}
            key={service.id}
          >
            <Typography fontSize={isMobile ? 20 : 25} align="center">
              {service.title}
            </Typography>
            <CardMedia
              component="img"
              height={isMobile ? 150 : 190}
              image={service.image}
              alt="service picture"
            />
            <CardContent>
              <Typography
                align="justify"
                fontSize={isMobile ? 10 : 15}
                color="text.secondary"
              >
                {service.topic}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};
