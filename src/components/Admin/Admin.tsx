import { Box, Button, Card, CardContent, Container, Modal, TableCell, TableRow } from "@mui/material";
// import Popup from './Popup';
import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import SinglePage from '../../domain/singe-page-pdf';




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


function Admin(){

    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  


  
      return (
        
        <div className="App">
          
                      <Card>
                          <CardContent>
                          <div className="header">Users waiting for verification</div>
                            <Container>
                                <TableRow>
                                    <TableCell>
                                    <p className="">User name... </p>
                                    </TableCell>
                                    <TableCell>
                                        <button type="button" className="btn"  onClick={handleClickOpen} >View Document</button>
                                    </TableCell>
                                    <TableCell>
                                    <button type="button" className="btn" >Approve</button>
                                   
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>
                                    <p className="header">User name... </p>
                                    </TableCell>
                                    <TableCell>
                                        <button type="button" className="btn"  onClick={handleClickOpen} >View Document</button>
                                    </TableCell>
                                    <TableCell>
                                    <button type="button" className="btn">Approve</button>
                                    </TableCell>
                                </TableRow>

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

