import { Container, Grid, Typography, Avatar, Box } from '@mui/material'
import { title } from 'process';
import React, { useEffect, useState } from 'react'
import Web3 from 'web3';
import { Paper } from '../../model/Paper'
import { Document, Page } from 'react-pdf';
import SinglePage from '../../domain/singe-page-pdf';

const SMART_CONTRACT_ABI = require('../config');
const SMART_CONTRACT_ADDRESS = require('../config');


type PaperProps = {
    paper: Paper
}

const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
};

function PaperDisplay({paper}: PaperProps) {

    const[paperState, setPaperState] = useState(paper)

    //State for pdf disply
    const [file, setFile] = useState('./sample.pdf');
    const [numPages, setNumPages] = useState(null);

    useEffect( () => {
        loadBlockchainData()
    }, []);

    const loadBlockchainData = async () => {
        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
        const accounts = await web3.eth.getAccounts()
        const contract = new web3.eth.Contract(SMART_CONTRACT_ABI.SMART_CONTRACT_ABI, SMART_CONTRACT_ADDRESS)
        contract.options.address =  "0xC4fF6Dde93E2BF20Cf26923582F0aDab4816304D"
        const paperOutput = await contract.methods.papers("0xE0B6e5538CE13841B19A022cA671a1177a3B7d83").call({ from: accounts[0] })
        setPaperState(paperOutput)
    }

    function onDocumentLoadSuccess({ numPages: nextNumPages }: any) {
        setNumPages(nextNumPages);
    }
    

    return (
                <Container maxWidth="md" sx={{ mt: 4 }}>
                    <Typography variant="h4" component="div">
                        { 
                            'Paper Title'
                            //paperState.title 
                        }
                    </Typography>
                    <Grid container spacing={2} sx={{ m: 2 }}>
                        <Grid item xs={8}>
                            <Typography variant="body1" component="div">
                                { "Domain" }
                            </Typography>
                            <Typography variant="body1" component="div" sx={{ mt: 1 }}>
                                { "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet risus feugiat in ante metus dictum at tempor." }
                            </Typography>
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={2}>
                            <Typography variant="body1" component="div">
                                { "Username" }
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