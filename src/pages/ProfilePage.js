import { Button, Grid, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import Navbar from '../Navbar';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';


function ProfilePage() {
    return (
        <>
            <Navbar/>
                <Grid 
                    container 
                    justify="center" 
                    alignItems="center" 
                    direction="column"
                    style={{ marginTop: 15}}
                    
                >
                    <Avatar sx={{ 
                        bgcolor: deepPurple[500], 
                        width:150, 
                        height:150, 
                        fontSize:'50px' 
                        }}
                    >
                        RP
                    </Avatar>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 3, width: '70ch', top:"5px", },
                        }}
                        noValidate
                        autoComplete="off"      
                    >
                        <div>
                            <TextField 
                                required
                                id = "name"
                                defaultValue="Rüstem"
                                label="Name"
                            />
                        </div>
                        <div>
                            <TextField 
                                required
                                id = "surname"
                                defaultValue="Pek"
                                label="SurName"
                            />
                        </div>
                        <div>
                            <TextField 
                                required
                                id = "email"
                                defaultValue="rpek@st.medipol.edu.tr"
                                label="E-mail"
                            />
                        </div>    
                        <div>
                            <TextField 
                                required
                                id = "address"
                                defaultValue="Üsküdar/İstanbul"
                                label="Address"
                            />
                        </div>            
                    </Box>
                    <Button 
                        variant="contained" 
                        style={{minWidth:'150px'}} 
                        sx={{bgcolor: deepPurple[500]}}
                    >
                        Update
                    </Button> 
                </Grid>
        </>
    )
}

export default ProfilePage;