import React, { useEffect, useRef, useState } from "react";
import { Alert, Button, Snackbar, TextField, Typography } from "@mui/material";
import * as Styled from "./conctact.styles";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import { FormActions, FormValues } from "../../GlobalTyps";
import emailjs from "emailjs-com";

const MessageSchema = Yup.object().shape({
  name: Yup.string().required(),
  phone: Yup.string().required(),
  email: Yup.string().required(),
  subject: Yup.string().required(),
  message: Yup.string().required(),
});

export function Contact() {
  const [showSnackBarSuccess, setShowSnackBarSuccess] = useState(false);
  const [showSnackBarError, setShowSnackBarError] = useState(false);
  const form: React.MutableRefObject<any> = useRef();

  const initialValues: FormValues = {
    name: "",
    phone: "",
    email: "",
    subject: "",
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
          setShowSnackBarError(true);
          console.log(error.message);
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
          <Styled.Container>
            <Styled.StyledForm>
              <Styled.CardContent>
                <Typography align="center" variant="h3" marginBottom={2}>
                  Fale conosco
                </Typography>

                <Styled.InputBox>
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
                  />
                  <ErrorMessage name="name">
                    {() => (
                      <Styled.MsgError>Campo obrigátorio!</Styled.MsgError>
                    )}
                  </ErrorMessage>
                </Styled.InputBox>

                <Styled.InputBox>
                  <TextField
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Telefone"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    size="small"
                    type="tel"
                    InputProps={{
                      inputProps: { maxLength: 12 },
                    }}
                  />
                  <ErrorMessage name="phone">
                    {() => (
                      <Styled.MsgError>Campo obrigátorio!</Styled.MsgError>
                    )}
                  </ErrorMessage>
                </Styled.InputBox>

                <Styled.InputBox>
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
                  />
                  <ErrorMessage name="email">
                    {() => (
                      <Styled.MsgError>Campo obrigátorio!</Styled.MsgError>
                    )}
                  </ErrorMessage>
                </Styled.InputBox>

                <Styled.InputBox>
                  <TextField
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Assunto"
                    type="text"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    size="small"
                    InputProps={{
                      inputProps: { maxLength: 30 },
                    }}
                  />
                  <ErrorMessage name="subject">
                    {() => (
                      <Styled.MsgError>Campo obrigátorio!</Styled.MsgError>
                    )}
                  </ErrorMessage>
                </Styled.InputBox>

                <Styled.InputBox>
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
                    minRows={7}
                  />
                  <ErrorMessage name="message">
                    {() => (
                      <Styled.MsgError>Campo obrigátorio!</Styled.MsgError>
                    )}
                  </ErrorMessage>
                </Styled.InputBox>

                <Button type="submit" variant="contained" size="large">
                  Enviar
                </Button>
              </Styled.CardContent>
            </Styled.StyledForm>
          </Styled.Container>

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
