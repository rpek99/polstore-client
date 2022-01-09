import { Button, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import React, {useEffect, useState} from 'react';
import Navbar from '../Navbar';
import Avatar from '@mui/material/Avatar';
import { blueGrey } from '@mui/material/colors';
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import FormInput from '../components/common/FormInput';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "yup-phone";
import PhoneInput from '../components/common/PhoneInput';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { useSnackbar} from "notistack";
import parsePhoneNumber from "libphonenumber-js";
import {useHistory} from "react-router-dom";

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
  });


function ProfileUpdatePage() {
    const { enqueueSnackbar } = useSnackbar();

    let history = useHistory();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const { handleSubmit, control } = useForm({
    resolver: yupResolver(Schema),
  });

  useEffect(() => {
    axios
        .get("users/getUser?userId=" +localStorage.getItem("currentUser"))
        .then((res) => {
            setFirstName(res.data.firstName)
            setLastName(res.data.lastName)
        })
    });

  const onSubmit = (updateUserForm) => {

    const phoneNumber = parsePhoneNumber("+" + updateUserForm["mobilePhone"]);
    if (phoneNumber) {
      updateUserForm["mobilePrefix"] = parseInt(phoneNumber.countryCallingCode);
      updateUserForm["mobilePhone"] = phoneNumber.nationalNumber;
    }

    axios
        .post('/users/updateUser', {
            'id': localStorage.getItem("currentUser"),
            'firstName': updateUserForm["firstName"],
            'lastName': updateUserForm["lastName"],
            'mobilePhone': updateUserForm["mobilePhone"],
            'mobilePrefix': updateUserForm["mobilePrefix"],
            'email': updateUserForm["email"],
        },
        {
            headers: { 'Content-Type': 'application/json' },
        })
        .then(() => { 
            setTimeout(() => history.push("/profile"), 400);
            enqueueSnackbar(
              "Update Successfully",
              {
                variant: "success",
                autoHideDuration: 1500,
              }
            );
          })
          .catch((err) =>
               enqueueSnackbar(err?.response?.data, {
                 variant: "error",
               })
            );
  }

    return (
        <>
            <Navbar/>
            <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
            <CssBaseline />
                <form
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                    encType='multipart/form-data'
                >
                  <Grid 
                    container 
                    justify="center" 
                    alignItems="center" 
                    direction="column"
                    style={{ marginTop: 80, marginBottom: 100}} 
                  >
                    <Avatar sx={{ 
                        bgcolor: blueGrey[900], 
                        width:150, 
                        height:150, 
                        fontSize:'50px',
                        marginTop: 2
                        }}
                    >
                        {firstName.charAt(0) + lastName.charAt(0)}
                    </Avatar>
                        <Box sx={{ mt: 3 }}>      
                          <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <Controller
                                name='firstName'
                                control={control}
                                render={(props) => (
                                    <FormInput {...props} required label="Name"/>
                                )}
                                />
                            </Grid>
                            <Grid item xs={12} >
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
                          </Grid>
                        </Box>
                        <Button 
                            type="submit"
                            variant="contained" 
                            style={{minWidth:'150px'}} 
                            sx={{bgcolor: blueGrey[900], marginTop: 5}}
                        >
                            Update
                        </Button> 
                    </Grid>
                  </form> 
                </Container>
                </ThemeProvider>
        </>
    )
}

export default ProfileUpdatePage;