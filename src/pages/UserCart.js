import { Button, Card, CardContent, CardHeader, CardMedia, Container, Divider, Grid, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Navbar from '../Navbar';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';


function UserCart() {
    return (
        <div>
            <Navbar/>
            <Grid
                container 
                justify="center" 
                alignItems="center" 
                direction="row"
                style={{ marginTop: 80}}
                
            >
                <Grid item xs={8}>         
                    <Card sx={{ display: 'flex', margin: 5, width: '90%', maxHeight: "800px", maxWidth: "800px"}}>
                        <CardMedia
                            component="img"
                            sx={{ width: 300, height: 200, }}
                            image="https://cwsmgmt.corsair.com/landing/home/images/Corsair_iCue_Room_Rainbow_Explore_Static-resized.jpg"
                            alt="Live from space album cover"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    Casper Excalibur Intel Core i5-11400F 
                                </Typography>
                                <Typography variant="h5" color="text.secondary" component="div">
                                    Mac Millers
                                </Typography>
                                <Typography variant="h8" color="text.secondary" component="div">
                                    İşlemci Tipi:Intel Core i5 2500Ekran Kartı Bellek Tipi:Onboard İşlemci
                                    Nesil:2.NesilEkran Kartı Kapasitesi:Onboard İşlemci Numarası:2500Ekran Kartı
                                    Tipi:Onboard Temel İşlemci
                                </Typography> 
                                <Divider style={{ margin: 10}}/>
                                <Typography variant="h6" color="text.secondary" component="div">
                                    8000 TL
                                </Typography>
                            </CardContent>
                        </Box>  
                        <CardHeader
                            action={
                                <IconButton>
                                    <RemoveCircleIcon/>
                                </IconButton> 
                            }   
                        />
                    </Card>

                    <Card sx={{ display: 'flex', margin: 5, width: '90%', maxHeight: "800px", maxWidth: "800px"}}>
                        <CardMedia
                            component="img"
                            sx={{ width: 300, height: 200 }}
                            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWP22?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1591634795000"
                            alt="Live from space album cover"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    Live From Space 
                                </Typography>
                                <Typography variant="h5" color="text.secondary" component="div">
                                    Mac Millers
                                </Typography>
                                <Typography variant="h8" color="text.secondary" component="div">
                                    Yeni AirPods, akıllı bir tasarımı çığır açan bir teknoloji ve
                                    kristal netliğinde bir ses kalitesiyle buluşturuyor. Gücünü yeni Apple
                                    H1 kulaklık çipinden alan AirPods ile şimdi ellerinizi kullanmadan
                                    yalnızca sesinizle Siri’ye erişebilirsiniz.
                                </Typography>
                                <Divider style={{ margin: 10}}/>
                                <Typography variant="h6" color="text.secondary" component="div">
                                    3000 TL
                                </Typography>
                            </CardContent>
                        </Box>
                        <CardHeader
                            action={
                                <IconButton>
                                    <RemoveCircleIcon/>
                                </IconButton> 
                            }
                        />
                    </Card>      
                </Grid>   
                <Grid item xs={3}>
                    <Container maxWidth="sm">
                        <Card sx={{ display: 'flex', margin: 2, width: '80%', maxHeight: "600px", maxWidth: "600px"}}>
                            <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        Total Cost : 11000 TL
                                    </Typography>
                                    <Divider style={{margin:10}}/>
                                    <div style={{ textAlign: "center"}}>
                                        <Button style={{ color: "white", backgroundColor: "#20232a"}}>Confirm</Button>
                                    </div>
                                </CardContent>
                            </Box>
                        </Card>
                    </Container>
                </Grid>     
            </Grid>
        </div>
    )
}

export default UserCart;