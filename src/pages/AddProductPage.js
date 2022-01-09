import { Button, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import Navbar from '../Navbar';
import Avatar from '@mui/material/Avatar';
import { blueGrey } from '@mui/material/colors';
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import FormInput from '../components/common/FormInput';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { useSnackbar} from "notistack";
import {useHistory} from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';

const theme = createTheme();

export const Schema = Yup.object().shape({
    productName: Yup.string().required("Cannot be empty"),
    productImageUrl: Yup.string().required("Cannot be empty"),
    productPrice: Yup.number()
      .typeError("Please enter valid number for price value")
      .required("Cannot be empty"),
    productDetail: Yup.string()
      .required("Cannot be empty")
  });

function AddProductPage() {
    const { enqueueSnackbar } = useSnackbar();

    let history = useHistory();

    const { handleSubmit, control } = useForm({
    resolver: yupResolver(Schema),
  });

  const onSubmit = (addProductForm) => {
    

    axios
        .post('/products/addProduct', {
            'user': {"id": localStorage.getItem("currentUser")},
            'productName': addProductForm["productName"],
            'productImageUrl': addProductForm["productImageUrl"],
            'productPrice': addProductForm["productPrice"],
            'productDetail': addProductForm["productDetail"],
        },
        {
        headers: { 'Content-Type': 'application/json' },
        })
        .then(() => {
            enqueueSnackbar(
              "Product Created Successfully",
              {
                variant: "success",
              }
            );
            history.push({
              pathname: "/my-products",
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
        <>
        <Navbar/>
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
            <CssBaseline />
                <form
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                >
                <Grid 
                    container 
                    justify="center" 
                    alignItems="center" 
                    direction="column"
                    style={{ marginTop: 150, marginBottom: 100}} 
                >
                    <Avatar sx={{ m: 1, bgcolor: "#46505A" }}>
                        <AddIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Create Product
                    </Typography>
                        <Box sx={{ mt: 3 }}>      
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <Controller
                                name='productName'
                                control={control}
                                render={(props) => (
                                    <FormInput {...props} required label="Product Name"/>
                                )}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                name='productImageUrl'
                                control={control}
                                render={(props) => (
                                    <FormInput {...props} required label="Image Url"/>
                                )}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                name="productPrice"
                                control={control}
                                render={(props) => (
                                    <FormInput {...props} required label="Price"/>
                                )}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <Controller
                                name='productDetail'
                                control={control}
                                render={(props) => (
                                    <FormInput {...props} required label="Product Details" />
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
                            Create
                        </Button> 
                    </Grid>
                </form> 
            </Container>
        </ThemeProvider>
        </>
    )
}

export default AddProductPage;