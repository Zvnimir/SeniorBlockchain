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
  //file: FileList;
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
     // setFileState(e.target.files)
     console.log("heo")
      getUrl(e.target.files).then((result) => {
        if (result) {
          setUrl(result);
           console.log(result)
           //setCondition(true)
          } else {
          console.log(result)
        } 
        //once we get the data we set loading to false
      })
      setFileState(e.target.files)
      

    }
    
  }

  useEffect(() => {
    //gets data from blockchain
    loadBlockchainData<User>("user")
      .then((result) => {
        if (result) {
          setUserState(result);
          console.log(result)
        }
        //once we get the data we set loading to false
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

              //console.log(paperState[0].title);
            }
            //once we get the data we set loading to false
          })
          .finally(() => {
            loadBlockchainData_token<number>("balance")
              .then((result) => {
                if (result) {
                  // userState.balance = result;
                  setTokenState(result)
                  //console.log(result);
                  //result.forEach((person) => { console.log(person); });
                  // userState.balance = result;
                  //console.log(paperState[0].title);
                } else {
                  console.log("Sipak");
                }
                //once we get the data we set loading to false
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

  // const renderDegree = () => {
  //   if (userState.degree == "") {
  //     return  <p></p>;
  //   } else {
  //     return <p> {userState.degree}</p>;
  //   }
  // }


  return (
    <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid container spacing={1} sx={{mb: 4}}>
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
                {userState.firstName} {userState.lastName} {(userState.confirmed == true) ? <VerifiedRoundedIcon sx={{ml: 1, color: blue[300]}}/> : ''}
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
        paperState.map(paper => (
          <PaperCard paper={paper}></PaperCard>
        ))}

      {/* <div className="centered">
        <Grid container spacing={20}>

          <Grid item xs="auto">
            <Card sx={{ maxWidth: 345 }}>

              {renderAuthButton()}


              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {userState.firstName} {userState.lastName}
                </Typography>

                
                

                
              </CardContent>
              <CardActions
                className="buttons"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button size="small">Edit</Button>
                <Button size="small" onClick={handleClickOpen}>
                  Add deegre
                </Button>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>Add deegre </DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      In order for user to gain more privileges, it should
                      upload degrees related to the specific fields
                    </DialogContentText>
                    <label htmlFor="contained-button-file" >
                      <Input accept="application/pdf" id="contained-button-file" multiple type="file" onChange={handleFileSelected} />
                      <Button sx={{ mt: 2 }} variant="contained" endIcon={<ArticleIcon />} component="span">
                        Attach Paper
                      </Button>
                    </label>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => {
                 //loadBlockchainData("requestAuthentication", ["https://api.web3.storage/car/bafybeibtas472lw5up3k52pk4kei6jhcfll6bb2nqroxaf4ggfuljnjrva"]).then(result => { console.log(result) });
                     // console.log(fileUrl)
                      if (fileState) {
                       storeFiles(fileState)
                      // setUrl(fileUrl)
                      console.log(fileUrl)
                        storeFiles(fileState)
                      };
                     
                     
                      //loadBlockchainData("requestAuthentication", [fileUrl]).then(result => { console.log(result) });
                     //console.log("hello",fileUrl)
                      //if(fileUrl){
                      //loadBlockchainData("requestAuthentication", [fileUrl]).then(result => { console.log(result) });
                      //}
                      //console.log(fileUrl)
                      //loadBlockchainData("requestAuthentication", [fileUrl]).then(result => { console.log(result) });
                      //getUrl(fileState)
                      setOpen(false)
                    }}>Ok</Button>
                  </DialogActions>
                </Dialog>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card sx={{ width: 345, maxHeight: 462 }}>

              <Alert severity="info">Papers: </Alert>

              <List
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                  overflow: "auto",
                  height: 414,
                  "& ul": { padding: 0 },
                }}
              >
                {paperState.map((paper) => (
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={paper.title}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {paper.category}
                          </Typography>
                          {
                            "- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet nunc blandit ultricies sodales Nulla nec lacus id diam finibus porttitor."
                          }
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>

        </Grid>
      </div> */}
    </Container>
  );
}

export default UserDisplay;
