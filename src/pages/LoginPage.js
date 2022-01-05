import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login';
import {Link} from "react-router-dom";
import FormInput from '../components/common/FormInput';
import { Controller, useForm } from "react-hook-form";
import {useHistory} from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar} from "notistack";


const theme = createTheme({
  typography: {
    "fontFamily":"Roboto",
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
   }
});

export const Schema = Yup.object().shape({
  email: Yup.string()
    .email("Pleas enter valid e-mail address")
    .required("Cannot be empty"),
  password: Yup.string()
    .required("Cannot be empty")
});


const LoginPage = () => {
  const { enqueueSnackbar } = useSnackbar();

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(Schema),
  });

  let history = useHistory();


  const onSubmit = (loginForm) => {

    const loginFormData = new Blob([JSON.stringify(loginForm)], {
      type: "application/json",
    });

    axios
      .post('auth/authentication', {
          'email': loginFormData["email"],
          'password': loginFormData["password"]
      },
      {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(() => {
        enqueueSnackbar(
          "Login Successful",
          {
            variant: "success",
          }
        );
        history.push({
          pathname: "/home",
          state: { verificationPending: true },
        });
      })
      .catch((err) =>
           enqueueSnackbar(err?.response?.data, {
             variant: "error",
           })
        );
  }


    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <Typography align='center' variant='h3' sx={{ marginTop: 7}}>
              POLSTORE
            </Typography>
          </ThemeProvider>
          <Box
            sx={{
              marginTop: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#46505A" }}>
              <LoginIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box noValidate sx={{ mt: 1 }}>
              <form
                noValidate
                onSubmit={handleSubmit(onSubmit)}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Controller
                      name='email'
                      control={control}
                      render={(props) => (
                        <FormInput {...props} required label="Email Address"/>
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Controller
                      name='password'
                      control={control}
                      render={(props) => (
                        <FormInput {...props} required label="Password" type="password"/>
                      )}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 , backgroundColor: "#20232a"}}
                >
                  Login
                </Button>
                <Grid container>
                  <Grid item xs/>
                  <Grid item>
                    <Link to="/sign-up">
                      Don't have an account? Sign Up
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Box>
        </Container>
    );
}

export default LoginPage;