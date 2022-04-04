/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button, Card, CardContent, Container, Modal, TableCell, TableRow } from "@mui/material";

import { styled } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import SinglePage from '../../domain/singe-page-pdf';

import { User } from "../../model/User";
import { loadBlockchainData } from "../../domain/blockchain-connector";
import { loadBlockchainData_token } from "../../domain/blockchain-connector_token";

import { useRef } from "react";
import emailjs, { init } from "@emailjs/browser";


type AdminProps = {
  users: User[];
};

type sendEmail = {
  email: string;
};



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >

        </IconButton>
      ) : null}
    </DialogTitle>
  );
};


function Admin({ users }: AdminProps) {



  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  const [usersState, setUsersState] = useState(users);
  const [loading, setLoading] = useState(true);
  //   function onDocumentLoadSuccess({ numPages }) {
  //     setNumPages(numPages);
  //   }


  useEffect(() => {
    //gets data from blockchain
    loadBlockchainData<User[]>("unconfiredUsers").then((result) => {
      if (result) {
        console.log(result);
        setUsersState(result);
        console.log(usersState);
      }
      //once we get the data we set loading to false
    })
      .finally(() => {
        setLoading(false);
        console.log(usersState);
      });

  }, []);

  //makes sure that undefined states dont throw errors


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  init("1UTO4rF8fpJlpA6_q");
var templateParams = {
  email : "vegahaklicka@gmail.com",
};

const handleApprove = (e) => {
  e.preventDefault();
  emailjs.send("service_sq7d1pf", "template_nujhwum", templateParams , "1UTO4rF8fpJlpA6_q").then(
    (result) => {
      alert("Message Sent Successfully");
      console.log(result.text);
    },
    (error) => {
      console.log(error.text);
    }
  );
}

  //makes sure that undefined states dont throw errors
  if (loading) {
    return <p>Data is loading...</p>;
  }

  return (

    <div className="App">



      <Card>
        <CardContent>
          <div className="header">Users waiting for verification</div>

          <Container>
            <TableRow>
              <TableCell>
                <Typography>User name</Typography>
              </TableCell>
              <TableCell>
                <p className="">Document </p>
              </TableCell>
              <TableCell>
                <p className="">Confirmation Type </p>
              </TableCell>
              <TableCell>
                <p className=""> </p>
              </TableCell>
              <TableCell>
                <p className=""> </p>
              </TableCell>
            </TableRow>

            {usersState.map((user) => (

           
              
              <TableRow>
                <TableCell>
                  <p className="">{user.firstName}</p>
                </TableCell>
                <TableCell>

                  <button type="button" className="btn" onClick={handleClickOpen} >View Document</button>

                </TableCell>
                <TableCell>

                  {user.confirmed && user.degree == "" ? <p className=""> Some degree </p> : <p className="">Basic  </p>}

                </TableCell>
                <TableCell>

                  <Button variant="contained" color="success"
                    onClick={() => {

                      if(user.confirmed && user.degree == ""){
                        loadBlockchainData("addDegree", [user.userAddress]).then(result => { console.log(result) });
                        //loadBlockchainData_token("sendDegreeTokens", []).then(result => { console.log(result) });
                       
                      } else {
                        loadBlockchainData("confirmUser", [user.userAddress]).then(result => { console.log(result) });
                        //loadBlockchainData_token("sendIntialTokens", []).then(result => { console.log(result) });
                         

                      }
                    }}>
                    Approve
                  </Button>

                </TableCell>
                <TableCell>
                  <Button variant="contained" color="error"
                    onClick={() => {
                      loadBlockchainData("rejectUser", []).then(result => { console.log(result) });
                    }}>
                    Reject
                  </Button>
                </TableCell>
                <TableCell>
                <button type="button" className="btn" onClick={handleApprove} >Send </button>

                 
            

                </TableCell>
              </TableRow>
              

            ))}



            {/* <TableRow>
              <TableCell>
                <p className="header">User name... </p>
              </TableCell>
              <TableCell>
                <button type="button" className="btn" onClick={handleClickOpen} >View Document</button>
              </TableCell>
              <TableCell>
                <p className="">Degree in X Catrgory </p>
              </TableCell>
              <TableCell>
                <Button variant="contained" color="success">
                  Approve
                </Button>

              </TableCell>
              <TableCell>
                <Button variant="contained" color="error">
                  Reject
                </Button>
              </TableCell>
            </TableRow> */}

          </Container>
        </CardContent>
      </Card>









      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Document
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div>
            <SinglePage pdf="sample.pdf"></SinglePage>
          </div>



        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>



    </div>


  );

}

export default Admin;

