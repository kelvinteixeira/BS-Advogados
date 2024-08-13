import React, { useRef, useState } from "react";
import {
  Alert,
  Box,
  Button,
  CardContent,
  Grid,
  IconButton,
  InputAdornment,
  Snackbar,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import { FormActions, FormValues } from "../GlobalTyps";
import emailjs from "emailjs-com";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import PersonIcon from "@mui/icons-material/Person";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const MessageSchema = Yup.object().shape({
  name: Yup.string().required(),
  phone: Yup.string().required(),
  email: Yup.string().required(),
  message: Yup.string().required(),
});

export function Contact() {
  const [showSnackBarSuccess, setShowSnackBarSuccess] = useState(false);
  const [showSnackBarError, setShowSnackBarError] = useState(false);
  const isMobile = useMediaQuery("(max-width:430px)");
  const isTablet = useMediaQuery("(max-width:820px)");
  const form: React.MutableRefObject<any> = useRef();

  const initialValues: FormValues = {
    name: "",
    phone: "",
    email: "",
    subject: "Caso Júridico",
    message: "",
  };

  function handleSendEmail(values: FormValues, action: FormActions) {
    emailjs
      .sendForm(
        String(import.meta.env.VITE_SERVICE_EMAIL_ID),
        String(import.meta.env.VITE_TEMPLATE_ID),
        form.current,
        String(import.meta.env.VITE_TOKEN)
      )
      .then(
        (result) => {
          setShowSnackBarSuccess(true);
        },
        (error) => {
          console.log(error.message);
          setShowSnackBarError(true);
        }
      );
    action.setSubmitting(false);
    action.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, action) => handleSendEmail(values, action)}
      validationSchema={MessageSchema}
    >
      {({ handleChange, handleSubmit, handleBlur, values }) => (
        <form ref={form} onSubmit={handleSubmit}>
          <Box
            sx={{
              padding: 5,
              background: "linear-gradient(to bottom, #757f9a, #faf8f8)",
            }}
          >
            <Grid
              container
              sx={{
                backgroundColor: "#00000027",
                borderRadius: 8,
                overflow: "hidden",
              }}
            >
              <Grid
                item
                xs={isMobile ? 12 : 5}
                sx={{
                  borderTopLeftRadius: 8,
                  borderBottomLeftRadius: 8,
                  padding: 3,
                }}
              >
                <img style={{ width: 60 }} src="/vectos/chat.svg" />
                <Typography
                  align="left"
                  fontSize={isMobile ? 20 : isTablet ? 30 : 50}
                  marginBottom={1}
                >
                  Fale conosco
                </Typography>
                <Typography
                  align="justify"
                  fontSize={isMobile || isTablet ? 14 : 17}
                  marginBottom={5}
                >
                  Para informações ou contato conosco, utilize nosso formulário.
                  Nós retornaremos a sua mensagem o mais breve possível.
                </Typography>
                <Grid container alignItems={"center"} marginBottom={2}>
                  <img style={{ width: 25 }} src="/vectos/phone.svg" />
                  <Typography fontSize={isMobile || isTablet ? 12 : 17}>
                    &nbsp;83 99637-3738 / 83 98733-6830
                  </Typography>
                </Grid>
                <Grid container alignItems={"center"} marginBottom={2}>
                  <img style={{ width: 25 }} src="/vectos/email.svg" />
                  <Typography fontSize={isMobile || isTablet ? 12 : 17}>
                    &nbsp; barbosadesousadvogados@gmail.com
                  </Typography>
                </Grid>
                <Grid container justifyContent={"center"}>
                  <IconButton
                    href={"https://www.instagram.com/bsadvogadoss/"}
                    target="_blank"
                    aria-label="instagram"
                  >
                    <AiOutlineInstagram color="#000" />
                  </IconButton>
                  <Tooltip title="Em desenvolvimento">
                    <IconButton href={""} target="_blank" aria-label="linkedin">
                      <AiOutlineLinkedin color="#000" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Em desenvolvimento">
                    <IconButton href={""} target="_blank" aria-label="facebook">
                      <AiOutlineFacebook color="#000" />
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
                    href={"https://api.whatsapp.com/send?phone=5583996373738"}
                    target="_blank"
                    aria-label="whatsapp"
                  >
                    <AiOutlineWhatsApp color="#000" />
                  </IconButton>
                </Grid>
              </Grid>

              <Grid
                item
                xs={isMobile ? 12 : 7}
                sx={{
                  borderLeft: isMobile ? "" : "1px solid #000",
                  borderTop: isMobile ? "1px solid #000" : "",
                  background: "#fff",
                  borderTopRightRadius: isMobile ? "" : 8,
                  borderBottomRightRadius: 8,
                  padding: 1,
                }}
              >
                <Typography
                  align="center"
                  fontSize={isMobile ? 20 : isTablet ? 30 : 50}
                >
                  Mande uma mensagem
                </Typography>
                <CardContent>
                  <Grid container spacing={2} marginBottom={1}>
                    <Grid item xs={isMobile ? 12 : isTablet ? 12 : 5}>
                      <TextField
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Nome completo"
                        variant="outlined"
                        color="primary"
                        fullWidth
                        size="small"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PersonIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <ErrorMessage name="name">
                        {() => (
                          <Typography fontSize={9} color={"error"}>
                            Campo obrigátorio!
                          </Typography>
                        )}
                      </ErrorMessage>
                    </Grid>

                    <Grid item xs={isMobile ? 12 : isTablet ? 6 : 3}>
                      <TextField
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Telefone"
                        fullWidth
                        variant="outlined"
                        color="primary"
                        size="small"
                        type="tel"
                        InputProps={{
                          inputProps: { maxLength: 12 },
                          startAdornment: (
                            <InputAdornment position="start">
                              <LocalPhoneIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <ErrorMessage name="phone">
                        {() => (
                          <Typography fontSize={9} color={"error"}>
                            Campo obrigátorio!
                          </Typography>
                        )}
                      </ErrorMessage>
                    </Grid>

                    <Grid item xs={isMobile ? 12 : isTablet ? 6 : 4}>
                      <TextField
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Seu email"
                        type="email"
                        variant="outlined"
                        color="primary"
                        fullWidth
                        size="small"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <EmailIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <ErrorMessage name="email">
                        {() => (
                          <Typography fontSize={9} color={"error"}>
                            Campo obrigátorio!
                          </Typography>
                        )}
                      </ErrorMessage>
                    </Grid>
                  </Grid>

                  <Box marginBottom={1}>
                    <TextField
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label="Mensagem"
                      variant="outlined"
                      color="primary"
                      fullWidth
                      size="small"
                      multiline
                      minRows={isMobile ? 5 : 7}
                    />
                    <ErrorMessage name="message">
                      {() => (
                        <Typography fontSize={9} color={"error"}>
                          Campo obrigátorio!
                        </Typography>
                      )}
                    </ErrorMessage>
                  </Box>

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{ textTransform: "none" }}
                  >
                    Enviar
                  </Button>
                </CardContent>
              </Grid>
            </Grid>
          </Box>

          <Snackbar
            open={showSnackBarSuccess}
            autoHideDuration={5000}
            onClose={() => setShowSnackBarSuccess(false)}
          >
            <Alert severity="success" variant="filled">
              Email enviado com sucesso!
            </Alert>
          </Snackbar>

          <Snackbar
            open={showSnackBarError}
            autoHideDuration={5000}
            onClose={() => setShowSnackBarSuccess(false)}
          >
            <Alert severity="error" variant="filled">
              Algo inesperado aconteceu, tente novamente!
            </Alert>
          </Snackbar>
        </form>
      )}
    </Formik>
  );
}
