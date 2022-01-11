import { Card, CardContent, CardHeader, CardMedia, Divider, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import {React, useEffect, useState} from 'react';
import Navbar from '../Navbar';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import { useSnackbar} from "notistack";

function MailBoxPage() {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axios.get("request/getUserMessages?userId=" +localStorage.getItem("currentUser"))
            .then((res) => {
                setMessages(res.data);
                console.log(res.data);
            })
    }, []);
    
    return (
        <>
            <Navbar/>
            <Grid 
              container 
              justify="center" 
              alignItems="center" 
              direction="column"
              style={{ marginTop: 80, marginBottom: 100}} 
            >
              {messages.length ?     
                <Grid item xs={8}>
                  {messages.map((message) => (         
                    <Card key={message.id} sx={{ display: 'flex', margin: 5, width: '90%', maxHeight: "600px", maxWidth: "800px"}}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', width: 400}}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    {"There is a request from "+message.buyerName} 
                                </Typography>
                                <Typography variant="h5" color="text.secondary" component="div">
                                    {"Product: "+message.productName}
                                </Typography>
                                <Divider style={{ margin: 10}}/>
                        
                                <Typography variant="h8" color="text.secondary" component="div">
                                    {"Phone Number: ("+message.buyerPhoneNumber.slice(0,3)+") "+message.buyerPhoneNumber.slice(3,6)+" "+message.buyerPhoneNumber.slice(6,8)+" "+message.buyerPhoneNumber.slice(8,10)} <br/>
                                    {"Email Address: "+message.buyerEmail}
                                </Typography> 
                                <Divider style={{ margin: 10}}/>
                                <Typography variant="h6" color="text.secondary" component="div">
                                    {"Request Time: "+message.date.slice(0,10)+" / "+message.date.slice(11,16)}
                                </Typography>    
                            </CardContent>
                        </Box>  
                    </Card> 
                  ))}
                </Grid>  
                : <Card sx={{ marginTop: 30, minWidth: 100, backgroundColor:"#f5f5f5"}}>
                    <CardContent>
                        <Typography sx={{ fontSize: 40, marginTop: 3}} color="text.secondary" gutterBottom>
                            You don't have any messages!
                        </Typography>
                    </CardContent>
                  </Card> } 
            </Grid>
        </>
    )
}

export default MailBoxPage;