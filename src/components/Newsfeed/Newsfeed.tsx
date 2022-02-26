import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActions, CardContent, Grid } from "@mui/material";
import { Container } from '@mui/material';

import './Newsfeed.css';


const SMART_CONTRACT_ABI = require('../config');
const SMART_CONTRACT_ADDRESS = require('../config');


export class Newsfeed extends React.Component {
    render() {
        return (
          <div>
            <Container maxWidth="sm">

                Hello from  the other side

            </Container>
          </div>
        );
    }
}
