import {React, useEffect, useState} from 'react';
import Navbar from '../Navbar';
import axios from "axios";
import { Card, CardContent, CardHeader, CardMedia, Divider, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useSnackbar} from "notistack";


function HomePage() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("products/getAllProducts")
            .then((res) => {
                setProducts(res.data)
            })
    }, []);


    return (
        <>
            <Navbar/>
            <div>
                <Grid 
                container 
                justify="center" 
                alignItems="center" 
                direction="column"
                style={{ marginTop: 80, marginBottom: 100}} 
                >
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
                                            <Tooltip title="Add To Cart">
                                                <IconButton>
                                                    <AddCircleIcon/>
                                                </IconButton> 
                                            </Tooltip> 
                                        </Grid>
                                    </Grid>
                                }   
                            />
                        </Card> 
                      ))}  
                    </Grid>  
                </Grid>
            </div>
        </>
    )
}

export default HomePage;