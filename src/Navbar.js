import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';


function Navbar() {

    return (
      <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static" style={{ backgroundColor:"#20232a"}} >
          <Toolbar>
            <Grid
                justify="space-between" // Add it here :)
                container 
                spacing={1}
            >
                <Grid item>
                    <Typography variant="h6" component="div" >
                        POLSTRORE
                    </Typography>
                </Grid>
                <Grid item>
                    <Button variant="inherit" href="">Home</Button>
                </Grid>
                <Grid item>
                    <Button variant="inherit" href="/profile">Profile</Button>
                </Grid>
                <Grid item>
                    <Button variant="inherit" href="">User Cart</Button>
                </Grid>
                
            </Grid>

            <Button variant="inherit" href="/">Logout</Button>
            
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

export default Navbar;


