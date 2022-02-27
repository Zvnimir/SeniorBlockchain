import { Container, Grid, Typography, Avatar, Box } from '@mui/material'
import { title } from 'process';
import React, { useEffect, useState } from 'react'
import Web3 from 'web3';
import { Paper } from '../../model/Paper'
import { Document, Page } from 'react-pdf';
import SinglePage from '../../domain/singe-page-pdf';
import { loadBlockchainData } from '../../domain/blockchain-connector';

const SMART_CONTRACT_ABI = require('../config');
const SMART_CONTRACT_ADDRESS = require('../config');


type PaperProps = {
    paper: Paper
}

function PaperDisplay({paper}: PaperProps) {

    const[paperState, setPaperState] = useState(paper)

    //State for pdf disply
    const [file, setFile] = useState('./sample.pdf');
    const [numPages, setNumPages] = useState(null);

    const [loading, setLoading] = useState(true);

   useEffect( () => {
      loadBlockchainData<Paper>("paper").then(result => {
         if(result) {
            setPaperState(result)
         } 
      }).finally(() => {
         setLoading(false)
         console.log(paperState)
       });
   }, []);

    function onDocumentLoadSuccess({ numPages: nextNumPages }: any) {
        setNumPages(nextNumPages);
    }
    
    if (loading || paperState == undefined) {
        console.log(paperState)
        return <p>Data is loading...</p>;
    }

    return (
                <Container maxWidth="md" sx={{ mt: 4 }}>
                    <Typography variant="h4" component="div">
                        { 
                            paperState.title
                        }
                        
                    </Typography>
                    <Grid container spacing={2} sx={{ m: 2 }}>
                        <Grid item xs={8}>
                            <Typography variant="body1" component="div">
                                { 
                                paperState.category 
                                }
                                
                            </Typography>
                            <Typography variant="body1" component="div" sx={{ mt: 1 }}>
                                { 
                                paperState.paperAbstract
                                }
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nibh mauris cursus mattis molestie a. Est placerat in egestas erat imperdiet sed euismod nisi porta.
                            </Typography>
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={2}>
                            <Typography variant="body1" component="div">
                                { 
                                paperState.authorHash
                                }
                                
                            </Typography>  
                        </Grid>
                        <Grid item xs={1}>
                            <Avatar>U</Avatar>
                        </Grid>
                    </Grid>

                    <Box sx={{ justifyContent: 'center' }}>
                        <SinglePage pdf={file}></SinglePage>
                    </Box>
                  
                </Container>
        )
    
}

export default PaperDisplay