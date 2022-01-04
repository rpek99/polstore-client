import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link, useHistory} from "react-router-dom";
import * as Yup from "yup";
import "yup-phone";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useSnackbar} from "notistack";
import FormInput from '../components/common/FormInput';
import PhoneInput from '../components/common/PhoneInput';
import parsePhoneNumber from "libphonenumber-js";


const theme = createTheme();

export const Schema = Yup.object().shape({
  firstName: Yup.string().required("Cannot be empty"),
  lastName: Yup.string().required("Cannot be empty"),
  email: Yup.string()
    .email("Pleas enter valid e-mail address")
    .required("Cannot be empty"),
  mobilePhone: Yup.string()
    .required("Cannot be empty")
    .phone("TR", true, "Please enter a valid number"),
  password: Yup.string()
    .required("Cannot be empty")
    .min(8, "Password must has minimum 8 character"),
  confirmPassword: Yup.string()
    .required("Cannot be empty")
    .oneOf([Yup.ref("password"), null], "Passwords doesn't match"),
});

const UserSignupPage = () => {
  const { enqueueSnackbar } = useSnackbar();

  let history = useHistory();
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(Schema),
  });

  const onSubmit = (registerForm) => {
    const formData = new FormData();

    delete registerForm["confirmPassword"];

    const phoneNumber = parsePhoneNumber("+" + registerForm["mobilePhone"]);
    if (phoneNumber) {
      registerForm["mobilePrefix"] = parseInt(phoneNumber.countryCallingCode);
      registerForm["mobilePhone"] = phoneNumber.nationalNumber;
    }


    const registerFormData = new Blob([JSON.stringify(registerForm)], {
      type: "application/json",
    });

    formData.append("user", registerFormData);


    axios
        .post('/users/register', formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then(() => {
          enqueueSnackbar(
            "Register completed successfully",
            {
              variant: "success",
            }
          );
          history.push({
            pathname: "/",
            state: { verificationPending: true },
          });
        })
        .catch((err) => 
           enqueueSnackbar(err?.response?.data, {
             variant: "error",
           })   
        );
  };

    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#46505A"  }}>
              <AccountBoxIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box sx={{ mt: 3 }}>
              <form
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                encType='multipart/form-data'
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Controller
                      name='firstName'
                      control={control}
                      render={(props) => (
                        <FormInput {...props} required label="Name"/>
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Controller
                      name='lastName'
                      control={control}
                      render={(props) => (
                        <FormInput {...props} required label="Surname"/>
                      )}
                    />
                  </Grid>
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
                      name="mobilePhone"
                      control={control}
                      render={(props) => (
                        <PhoneInput placeholder="Phone Number*:" {...props} />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Controller
                      name='password'
                      control={control}
                      render={(props) => (
                        <FormInput {...props} type="password" required label="Password"/>
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Controller
                      name='confirmPassword'
                      control={control}
                      render={(props) => (
                        <FormInput {...props} type="password" required label="Confirm Password"/>
                      )}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: "#20232a" }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to="/">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    )
};
export default UserSignupPage;