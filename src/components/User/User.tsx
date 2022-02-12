import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
//import { SMART_CONTRACT_ADDRESS, SMART_CONTRACT_ABI } from '../config'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Web3 from 'web3'
import { User } from '../../model/User';

const SMART_CONTRACT_ABI = require('../config');
const SMART_CONTRACT_ADDRESS = require('../config');

type UserProps = {
   user: User
   //temporary
   email: String
}

function UserDisplay({email}: UserProps) {

   const [emailState, setEmailState] = useState(email)

   //this will run on init
   useEffect( () => {
        loadBlockchainData()
   }, []);
  
   const loadBlockchainData = async () => {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
      const accounts = await web3.eth.getAccounts()
      const contract = new web3.eth.Contract(SMART_CONTRACT_ABI.SMART_CONTRACT_ABI, SMART_CONTRACT_ADDRESS)
      contract.options.address =  "0xC4fF6Dde93E2BF20Cf26923582F0aDab4816304D"
      const userCount: User = await contract.methods.users("0xE0B6e5538CE13841B19A022cA671a1177a3B7d83").call({ from: accounts[0] })
      setEmailState(userCount.email)
   }
 
  return (
      <div className="App" >
         <Typography variant="h3" component="div">
            User Page
         </Typography>
         <div className="centered">
            <Grid container spacing={20}>
               <Grid item xs="auto">
                  <Card sx={{ maxWidth: 345 }}>
                  <Avatar  alt="The image" src={"user.png"}  className="userPicture" style={{
                  width: 150,
                  height: 150,
                  }} />
                  <CardContent>
                     <Typography gutterBottom variant="h5" component="div">
                        { 
                           emailState
                        }
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nullam aliquet nunc blandit ultricies sodales. 
                        Nulla nec lacus id diam finibus porttitor.
                     </Typography>
                  </CardContent>
                  <CardActions className="buttons">
                     <Button size="small">View Balnce</Button>
                     <Button size="small">Edit</Button>
                  </CardActions>
                  </Card>
               </Grid>
               <Grid item xs={6}>
                  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                  <ListItem alignItems="flex-start">
                     <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                     </ListItemAvatar>
                     <ListItemText
                     primary="Paper 1"
                     secondary={
                     <React.Fragment>
                        <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                        >
                        Biology
                        </Typography>
                        {" - Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.…"}
                     </React.Fragment>
                     }
                     />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                     <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                     </ListItemAvatar>
                     <ListItemText
                     primary="Paper 2"
                     secondary={
                     <React.Fragment>
                        <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                        >
                        Math
                        </Typography>
                        {" - Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.…"}
                     </React.Fragment>
                     }
                     />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                     <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                     </ListItemAvatar>
                     <ListItemText
                     primary="Paper 2"
                     secondary={
                     <React.Fragment>
                        <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                        >
                        Java
                        </Typography>
                        {" - Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.…"}
                     </React.Fragment>
                     }
                     />
                  </ListItem>
                  </List>
               </Grid>
            </Grid>
         </div>
      </div>
   );
  }
  
export default UserDisplay;