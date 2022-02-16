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
import { loadBlockchainData } from '../../domain/blockchain-connector';

const SMART_CONTRACT_ABI = require('../config');
const SMART_CONTRACT_ADDRESS = require('../config');

type UserProps = {
   user: User
}

function UserDisplay({user}: UserProps) {

   const [userState, setUserState] = useState(user)
   const [loading, setLoading] = useState(true);

   useEffect( () => {
      //gets data from blockchain
      loadBlockchainData("user").then(result => {
         if(result != null) {
            setUserState(result)
         } 
      //once we get the data we set loading to false
      }).finally(() => {
         setLoading(false);
       });
   }, []);


   // const loadBlockchainData = async () => {
   //    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
   //    const accounts = await web3.eth.getAccounts()
   //    const contract = new web3.eth.Contract(SMART_CONTRACT_ABI.SMART_CONTRACT_ABI, SMART_CONTRACT_ADDRESS)
   //    contract.options.address =  "0xA742a55b2021A89c7BE5B0c6230B4724a4E1f279"
   //    const userCount = await contract.methods.users("0x9c78997736fA83b8b254342638CcCaF3d2b01f1d").call({ from: accounts[0] })
   //    setEmailState(userCount.userEmail)
   //    console.log(userCount)
   // }
   
   //makes sure that undefined states dont throw errors
   if (loading) {
      return <p>Data is loading...</p>;
   }

  return (
   <div className="App" >
   <Typography variant="h3" component="div">
      User Page
   </Typography>
   <div className="centered">
      <Grid container spacing={20}>    
         <Grid item xs={6}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', overflow: 'auto', maxHeight: 350, '& ul': { padding: 0 }, }}>
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
            </List>
         </Grid>

         <Grid item xs="auto">
            <Card sx={{ maxWidth: 345 }}>
               <Avatar alt="The image" src={"user.png"} className="userPicture" style={{
                  width: 150,
                  height: 150,
                  margin: 'auto',
                  marginTop: 25
               }} />
               <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                     { userState.firstName }  
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Nullam aliquet nunc blandit ultricies sodales.
                     Nulla nec lacus id diam finibus porttitor.
                  </Typography>
               </CardContent>
               <CardActions className="buttons" style={{ display: "flex",  justifyContent: "flex-end" }}>
                  <Button size="small">View Balnce</Button>
                  <Button size="small">Edit</Button>
               </CardActions>
            </Card>
         </Grid>
      </Grid>
   </div>
</div>
   );
  }
  
export default UserDisplay;