import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import {Link} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    "fontFamily":"Roboto",
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
   }
});


function Navbar() {

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" style={{ backgroundColor:"#20232a"}} >
          <Toolbar>
            <Grid
                justify="space-between"
                container 
                spacing={1}
            >
                <Grid item >
                  <ThemeProvider theme={theme}>
                    <Typography variant="h5" component="div" >
                        POLSTORE
                    </Typography>
                  </ThemeProvider>
                </Grid>
                <Grid item>
                    <Link to="/home" style={{ textDecoration: 'none', color: 'white', }}>
                      <Button variant="inherit">Home</Button>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/profile" style={{ textDecoration: 'none', color: 'white', }}>
                      <Button variant="inherit">Profile</Button>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/user-cart" style={{ textDecoration: 'none', color: 'white', }}>
                      <Button variant="inherit">Cart</Button>
                    </Link>
                </Grid>
                
            </Grid>

            <Button variant="inherit" href="/">Logout</Button>
            
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

export default Navbar;


