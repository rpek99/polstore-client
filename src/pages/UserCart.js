import { Card, CardContent, CardHeader, CardMedia, Divider, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import {React, useEffect, useState} from 'react';
import Navbar from '../Navbar';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import { useSnackbar} from "notistack";


function UserCart() {
    const { enqueueSnackbar } = useSnackbar();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("carts/getCartProducts?userId=" +localStorage.getItem("currentUser"))
            .then((res) => {
                setProducts(res.data);
            })
    }, [])

    const onDelete = ((productId) => {
        axios
            .post("carts/removeFromCart", {
                "userId": localStorage.getItem("currentUser"),
                "productId": productId
            })
            .then(() => {
                enqueueSnackbar(
                    "Product Removed From Your Cart Successfully",
                    {
                      variant: "success",
                      autoHideDuration: 2000,
                    }
                  );
            })
            .then(() => {
                axios
                    .get("carts/getCartProducts?userId=" +localStorage.getItem("currentUser"))
                    .then((res) => {
                        setProducts(res.data);
                    })
            })
            .catch((err) =>
                enqueueSnackbar("Something Went Wrong", {
                    variant: "error",
                })
            );
    })

    const onRequest = (productId) => {
        axios
            .post("request/createMessage", {
                "userId": localStorage.getItem("currentUser"),
                "productId": productId
            })
            .then(() => {
                enqueueSnackbar(
                    "Send Request Successfully",
                    {
                      variant: "success",
                      autoHideDuration: 2000,
                    }
                  );
            })
            .catch((err) => {
                enqueueSnackbar("Something Went Wrong", {
                    variant: "error",
                })
            })
    }

    return (
        <div>
            <Navbar/>
            <Grid 
              container 
              justify="center" 
              alignItems="center" 
              direction="column"
              style={{ marginTop: 80, marginBottom: 100}} 
            >
              {products.length ?     
                <Grid item xs={8}>
                  {products.map((product) => (         
                    <Card key={product.id} sx={{ display: 'flex', margin: 5, width: '90%', maxHeight: "600px", maxWidth: "800px"}}>
                        <CardMedia
                            component="img"
                            sx={{ width: 300, height: 200, }}
                            image={product.productImageUrl}
                            alt="Live from space album cover"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column', width: 400}}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    {product.productName}  
                                </Typography>
                                <Typography variant="h5" color="text.secondary" component="div">
                                    {product.user.firstName+" "+product.user.lastName}
                                </Typography>
                                <Typography variant="h8" color="text.secondary" component="div">
                                    {product.productDetail}
                                </Typography> 
                                <Divider style={{ margin: 10}}/>
                                    <Typography variant="h6" color="text.secondary" component="div">
                                        {product.productPrice+" TL" }
                                    </Typography>    
                            </CardContent>
                        </Box>  
                        <CardHeader
                            action={
                                <Grid container>
                                    <Grid item >
                                        <Tooltip title="Request">
                                            <IconButton>
                                                <SendIcon onClick={() => onRequest(product.id)}/>
                                            </IconButton> 
                                        </Tooltip> 
                                    </Grid>
                                    <Grid item >
                                        <Tooltip title="Remove">
                                            <IconButton>
                                                <RemoveCircleIcon onClick={() => onDelete(product.id)}/>
                                            </IconButton> 
                                        </Tooltip> 
                                    </Grid>
                                </Grid>
                            }   
                        />
                    </Card> 
                  ))}
                </Grid>  
                : <Card sx={{ marginTop: 30, minWidth: 100, backgroundColor:"#f5f5f5"}}>
                    <CardContent>
                        <Typography sx={{ fontSize: 40, marginTop: 3}} color="text.secondary" gutterBottom>
                            You haven't added any products your cart yet!
                        </Typography>
                    </CardContent>
                  </Card> } 
            </Grid>
        </div>
    )
}

export default UserCart;