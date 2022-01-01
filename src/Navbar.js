import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import {Link} from "react-router-dom";


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
                    <Typography variant="h5" component="div" >
                        POLSTRORE
                    </Typography>
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


