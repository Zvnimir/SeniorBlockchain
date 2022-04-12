//import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import { User } from "../../model/User";
import { useEffect, useState, ChangeEvent } from "react";
import { loadBlockchainData } from "../../domain/blockchain-connector";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, styled, Container } from '@mui/material';
import { getUrl, storeFiles } from '../../domain/web3-storage-client';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';

type UserProps = {
  user: User;
};

function Edit({ user }: UserProps) {
  const [userState, setUserState] = useState(user);
  const [loading, setLoading] = useState(true);
  const [firstNameState, setFirstNameState] = useState("")
  const [lastNameState, setLastNameState] = useState("")
  const [emailState, setEmailState] = useState("")
  const [biographyState, setBiographyState] = useState("")
  const [open, setOpen] = useState(false);
  const [fileUrl, setUrl] = useState("");
  const [fileState, setFileState] = useState<FileList>()
  const [tester, setCondition] = useState(false);

  const Input = styled('input')({
    display: 'none',
  });


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      setFileState(e.target.files)
      getUrl(e.target.files).then((result) => {
        if (result) {
          setUrl(result);
          console.log(result)
          console.log(fileUrl)
          loadBlockchainData("requestAuthentication", [result]).then(result => { console.log(result) });
        } else {
          console.log("url is not loading");
        }
        //once we get the data we set loading to false
      })

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
        setLoading(false);

      });

  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  }
  const handleChangeFirstName = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFirstNameState(e.target.value)
  }

  const handleChangeLastName = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLastNameState(e.target.value)
  }

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmailState(e.target.value)
  }

  const handleChangeBiography = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBiographyState(e.target.value)
  }

  return (
    <Container sx={{display: 'flex', justifyContent: 'center', mt: 15}}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '60ch' }}>
        <Typography fontWeight={'light'} variant="h4" gutterBottom component="div" sx={{ m: 1, width: '24ch', mb: 4, textAlign: 'center' }}>
          Edit Your Data
        </Typography>

        <TextField
          id="outlined"
          sx={{ m: 1, width: '24ch' }}
          label="First Name"
          defaultValue={userState.firstName}
          variant="standard"
          onChange={handleChangeFirstName}
        />

        <TextField
          id="outlined"
          sx={{ m: 1, width: '24ch' }}
          label="Last Name"
          variant="standard"
          defaultValue={userState.firstName}
          onChange={handleChangeLastName}
        />


        <TextField
          id="outlined"
          sx={{ m: 1, width: '50ch' }}
          label="Email"
          variant="standard"
          defaultValue={userState.email}
          onChange={handleChangeEmail}
        />



        <TextField sx={{ m: 1, width: '50ch', mb: 4 }} defaultValue={userState.biography} id="abstract" label="Bibliography" variant="standard" multiline maxRows={4} fullWidth={true} onChange={handleChangeBiography} />

        <Button variant="contained" size="medium" sx={{ m: 1 }} onClick={handleClickOpen}>
          Add degree
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add degree </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Upload your degree to gain full user privilages.
            </DialogContentText>
            <label htmlFor="contained-button-file" >
              <Input accept="application/pdf" id="contained-button-file" multiple type="file" onChange={handleFileSelected} />
              <Button sx={{ mt: 2 }} variant="contained" endIcon={<ArticleRoundedIcon />} component="span">
                Attach Degree
              </Button>
            </label>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={() => {
              
              console.log(fileUrl)
              //loadBlockchainData("requestAuthentication", [fileUrl]).then(result => { console.log(result) });
              if (fileState) {
                storeFiles(fileState)
              };
              //getUrl(fileState)
              setOpen(false)
            }}>Ok</Button>
          </DialogActions>
        </Dialog>

        <Button variant="contained" size="medium" sx={{ m: 1, width: '5ch' }} onClick={() => {
          loadBlockchainData("editUser", [emailState, firstNameState, lastNameState, biographyState, userState.passwordHash]).then(result => { console.log(result) });
        }}>Save</Button>
      </Box>
    </Container>

  );
}

export default Edit;
