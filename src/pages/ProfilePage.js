import { Button, Grid, Typography } from '@mui/material';
import React, {useEffect, useState} from 'react';
import Navbar from '../Navbar';
import Avatar from '@mui/material/Avatar';
import { blueGrey } from '@mui/material/colors';
import axios from "axios";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Link} from "react-router-dom";

const theme = createTheme();

function ProfilePage() {

   const [email, setEmail] = useState("");
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [mobilePhone, setMobilePhone] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");


    useEffect(() => {
        axios
            .get("users/getUser?userId=" +localStorage.getItem("currentUser"))
            .then((res) => {
                setEmail(res.data.email)
                setFirstName(res.data.firstName)
                setLastName(res.data.lastName)
                setMobilePhone(res.data.mobilePhone);
                setPhoneNumber(`(${mobilePhone.slice(0,3)}) ${mobilePhone.slice(3,6)} ${mobilePhone.slice(6,8)} ${mobilePhone.slice(8.10)}`);
            })
    });

    

    return (
        <>
            <Navbar/>
            <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
            <CssBaseline />
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
                    <Card  sx={{ minHeight: 310, minWidth: 390, marginTop: 8, backgroundColor:"#f5f5f5" }}>
                        <CardContent>
                            <Typography variant='h5'>
                                First Name: {firstName}
                            </Typography>
                            <Typography variant='h5' sx={{ marginTop: 2}}>
                                Last Name: {lastName}
                            </Typography>
                            <Typography variant='h5' sx={{ marginTop: 2}}>
                                Email: {email}
                            </Typography>
                            <Typography variant='h5' sx={{ marginTop: 2}}>
                                Phone Number: {phoneNumber}
                            </Typography>
                        </CardContent>
                        <Typography align='center'>
                          <Link to="/profile-update" style={{ textDecoration: 'none', color: 'white', }}>
                            <Button 
                                variant="contained" 
                                style={{minWidth:'150px'}} 
                                sx={{bgcolor: blueGrey[900], marginTop: 5}} 
                            >
                                Update Informations
                            </Button>
                          </Link>
                        </Typography>
                    </Card>
                </Grid>
            </Container>
            </ThemeProvider>
        </>
    );
}

export default ProfilePage;