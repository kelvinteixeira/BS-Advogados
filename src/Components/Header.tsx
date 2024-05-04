import {
  Button,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

export const Header = () => {
  const isMobile = useMediaQuery("(max-width:430px)");
  const isTablet = useMediaQuery("(max-width:817px)");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      if (scrollTop > 180) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isTablet ? null : (
        <Grid
          container
          position={"fixed"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          height={isMobile ? 50 : isTablet ? 75 : 80}
          className={isScrolled ? "dark-header" : "normal-header"}
        >
          <img style={{ width: 40 }} src="/vectos/balance.svg" />
          <Grid>
            <Button
              className={isScrolled ? "" : "seletor"}
              sx={{
                color: isScrolled ? "#000" : "#d3caca",
                fontWeight: isScrolled ? "bold" : "",
                fontSize: isTablet ? 14 : 17,
                letterSpacing: 2,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Link
                to="bs-advogados"
                smooth={true}
                duration={500}
                offset={-50}
              >
                B. S. Advogados
              </Link>
            </Button>
            <Button
              sx={{
                color: isScrolled ? "#000" : "#d3caca",
                fontWeight: isScrolled ? "bold" : "",
                fontSize: isTablet ? 14 : 17,
                letterSpacing: 2,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Link to="team" smooth={true} duration={500} offset={-50}>
                Quem somos
              </Link>
            </Button>
            <Button
              sx={{
                color: isScrolled ? "#000" : "#d3caca",
                fontWeight: isScrolled ? "bold" : "",
                fontSize: isTablet ? 14 : 17,
                letterSpacing: 2,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Link to="ourServices" smooth={true} duration={500} offset={-50}>
                Áreas de atuação
              </Link>
            </Button>
            <Button
              sx={{
                color: isScrolled ? "#000" : "#d3caca",
                fontWeight: isScrolled ? "bold" : "",
                fontSize: isTablet ? 14 : 17,
                letterSpacing: 2,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Link to="contact" smooth={true} duration={500} offset={-50}>
                Fale conosco
              </Link>
            </Button>
          </Grid>
          <img style={{ width: 40 }} src="/vectos/balance.svg" />
        </Grid>
      )}
    </>
  );
};
