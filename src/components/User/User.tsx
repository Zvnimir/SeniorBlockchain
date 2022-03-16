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
import { styled } from '@mui/material'
import { storeFiles } from '../../domain/web3-storage-client'

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
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
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
          console.log(result);
          //result.forEach((person) => { console.log(person); });
          // userState.balance = result;
          //console.log(paperState[0].title);
        } else {
          console.log("Sipak");
        }
        //once we get the data we set loading to false
      })
      .finally(() => {
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
      return  <Alert severity="success">The user is verified </Alert>;
    } else {
      return  <Alert severity="error">The user is not verified </Alert>;
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
    <div className="App">
      <div className="centered">
        <Grid container spacing={20}>
        
          <Grid item xs="auto">
            <Card sx={{ maxWidth: 345 }}>


             
              {renderAuthButton()}

              <Avatar
                alt="The image"
                src={"user.png"}
                className="userPicture"
                style={{
                  width: 150,
                  height: 150,
                  margin: "auto",
                  marginTop: 25,
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {userState.firstName} {userState.lastName}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam aliquet nunc blandit ultricies sodales. Nulla nec lacus
                  id diam finibus porttitor.
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Balance is: {tokenState}
                </Typography>
                
                <Typography variant="body2" color="text.primary">
                {userState.degree}
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

                      loadBlockchainData("requestAuthentication", []).then(result => { console.log(result) });
                      if (fileState) {
                        storeFiles(fileState)
                      };
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
      </div>
    </div>
  );
}

export default UserDisplay;
