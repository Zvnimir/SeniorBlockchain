import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
//import { SMART_CONTRACT_ADDRESS, SMART_CONTRACT_ABI } from '../config'
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Alert from "@mui/material/Alert";
import { User } from "../../model/User";
import { loadBlockchainData } from "../../domain/blockchain-connector";
import { loadBlockchainData_token } from "../../domain/blockchain-connector_token";
import { Paper } from "../../model/Paper";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ArticleIcon from "@mui/icons-material/Article";
import { Box, Container, styled } from '@mui/material'
import { storeFiles, getUrl } from '../../domain/web3-storage-client'
import FeedRoundedIcon from '@mui/icons-material/FeedRounded';
import CurrencyBitcoinRoundedIcon from '@mui/icons-material/CurrencyBitcoinRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import PaperCard from "../Paper/PaperCard";
import { blue } from "@mui/material/colors";

type UserProps = {
  user: User;
  papers: Paper[];
};
const Input = styled('input')({
  display: 'none',
});

function UserDisplay({ user, papers }: UserProps) {
  const [open, setOpen] = React.useState(false);
  const [userState, setUserState] = useState(user);
  const [loading, setLoading] = useState(true);
  const [paperState, setPaperState] = useState(papers);
  const [fileState, setFileState] = useState<FileList>()
  const [tokenState, setTokenState] = useState(0);
  const [fileUrl, setUrl] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      console.log("heo")
      getUrl(e.target.files).then((result) => {
        if (result) {
          setUrl(result);
          console.log(result)
        } else {
          console.log(result)
        }
      })
      setFileState(e.target.files)
    }

  }

  //gets data from blockchain
  useEffect(() => {
    
    loadBlockchainData<User>("user")
      .then((result) => {
        if (result) {
          setUserState(result);
          console.log(result)
        }
      })
      .finally(() => {
        loadBlockchainData<Paper[]>("userPapers")
          .then((result) => {
            if (result) {
              setPaperState(result);
              // console.log(result);
              result.forEach((person) => {
                console.log(person);
              });
            }
          })
          .finally(() => {
            loadBlockchainData_token<number>("balance")
              .then((result) => {
                if (result) {
                  setTokenState(result)
                } else {
                  console.log("Sipak");
                }
              }).finally(() => {
                setLoading(false);
              });
          });
      });
  }, []);

  //makes sure that undefined states dont throw errors
  if (loading) {
    return <p>Data is loading...</p>;
  }

  const renderAuthButton = () => {
    if (userState.confirmed) {
      return <Alert severity="success">The user is verified </Alert>;
    } else {
      return <Alert severity="error">The user is not verified </Alert>;
    }
  }

  return (
    <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <Grid container spacing={1} sx={{ mb: 4 }}>
        <Grid item xs={5}>
          <Box sx={{ display: 'flex', alignItems: 'left', mt: 6, mb: 4 }}>

            <Avatar
              src={"user.png"}
              className="userPicture"
              style={{
                width: 120,
                height: 120,
              }}
              sx={{ mr: 6 }}
            />

            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

              <Typography fontWeight={'light'} variant="h5" component="div" sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                {userState.firstName} {userState.lastName} {(userState.confirmed == true) ? <VerifiedRoundedIcon sx={{ ml: 1, color: blue[300] }} /> : ''}
              </Typography>

              <Typography fontWeight={'light'} variant="body1" color="text.secondary" sx={{ mb: .7 }}>
                {(userState.degree != "") ? userState.degree : "No degree"}
              </Typography>

              <Box sx={{ display: 'flex' }}>
                <Typography fontWeight={'light'} variant="body1" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', mr: 1.5 }}>
                  <CurrencyBitcoinRoundedIcon /> {tokenState}
                </Typography>
                <Typography fontWeight={'light'} variant="body1" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                  <FeedRoundedIcon /> {paperState.length}
                </Typography>
              </Box>

            </Box>
          </Box>
        </Grid>

        <Grid item xs={7}>
          <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', padding: 1 }}>
            <Typography fontWeight={'light'} variant="body1" color="text.secondary">
              {userState.biography}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {
        //displays all papers for a user
        paperState.map(paper => (
          <PaperCard paper={paper}></PaperCard>
        ))}

    </Container>
  );
}

export default UserDisplay;
