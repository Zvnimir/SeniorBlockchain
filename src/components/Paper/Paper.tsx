import { Container, Grid, Typography, Avatar, Box, TextField, Button, Link, Divider } from '@mui/material'
import { title } from 'process';
import React, { ChangeEvent, useEffect, useState } from 'react'
import Web3 from 'web3';
import { Paper } from '../../model/Paper'
import { Review } from '../../model/Review'
import { Document, Page } from 'react-pdf';
import SinglePage from '../../domain/singe-page-pdf';
import { loadBlockchainData } from '../../domain/blockchain-connector';
import { loadBlockchainData_token } from "../../domain/blockchain-connector_token";
import ReviewDisplay from '../Review/Review';
import { retrieveFiles, storeFiles } from '../../domain/web3-storage-client';
import { useLocation } from 'react-router-dom';

const SMART_CONTRACT_ABI = require('../config');
const SMART_CONTRACT_ADDRESS = require('../config');


type PaperProps = {
    paper: Paper,
    reviews: Review[]
}

type LocationState = { paperId: string }

function PaperDisplay({ paper, reviews }: PaperProps) {

    const location = useLocation();
    const { paperId } = location.state as LocationState

    const [paperState, setPaperState] = useState(paper)

    const [reviewContentState, setReviewContentState] = useState("")

    const [reviewsState, setReviewssState] = useState(reviews)

    //State for pdf disply
    const [file, setFile] = useState<Promise<any>>();
    const [numPages, setNumPages] = useState(null);

    const [loading, setLoading] = useState(true);

    const handleChangeReview = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setReviewContentState(e.target.value)
    }

    // display paper data
    useEffect(() => {
        console.log(paperId)

        loadBlockchainData<Paper>("paper", [paperId]).then(result => {
            if (result) {
                setPaperState(result)
            }
            var cid = result[6].replace('https://api.web3.storage/car/', '');
            console.log(cid)
            retrieveFiles(cid).then(result => {
                if (result) {
                    setFile(result)
                }
            })
        }).finally(() => {
            console.log(paperState)
            loadBlockchainData<Review[]>("paperReviews", [paperId]).then(result => {
                if (result) {
                    setReviewssState(result)
                }
                console.log(result)
            }).finally(() => {
                setLoading(false)
            })
        })
    }, [])

    function onDocumentLoadSuccess({ numPages: nextNumPages }: any) {
        setNumPages(nextNumPages);
    }
    if (loading) {
        return <p>Data is loading...</p>;
    }

    return (
        <Container maxWidth="md" sx={{ mt: 6 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mb: 4 }}>
                <Typography fontWeight={'light'} variant="h4" component="div">
                    {
                        //IMPORTANT!!!!!!!!!!
                        // This is currently the only way to access varaibles becasuse the tuple gets messed up in contract to contaract communication
                        paperState[2]
                    }
                </Typography>
            </Box>
            <Grid container sx={{ m: 2, display: 'flex', flexDirection: "column", }}>

                <Typography fontWeight={'light'} sx={{ fontSize: 14, backgroundColor: '#4db6ac', maxWidth: 150, borderRadius: 5, padding: 1, textAlign: 'center', color: 'white', boxShadow: 2 }}>
                    {
                        paperState[3]
                    }
                </Typography>
                <Typography fontWeight={'light'} variant="body1" component="div" sx={{ mt: 2.5 }}>
                    {
                        paperState[4]
                    }
                </Typography>
            </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2, width: '100%', height: 800, mt: 5 }}>
                <Box sx={{ backgroundColor: '#F3EDF7', borderRadius: 5, padding: '2.5em', boxShadow: 3, width: 420 }}>
                    <SinglePage pdf={file}></SinglePage>
                </Box>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 4 }}>

                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { mt: 1, mb: 1 },
                        width: 450,
                    }}
                    noValidate
                >
                    <Typography fontWeight={'light'} variant="body2" color="text.secondary">
                        Post a review
                    </Typography>

                    <TextField id="review" hiddenLabel placeholder="What are your thoughts?" multiline rows={6} fullWidth={true} variant="filled" onChange={handleChangeReview} />

                    <Box display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Button variant="contained" component="span"
                            onClick={() => {
                                loadBlockchainData_token("uploadReview").then(result => {
                                    loadBlockchainData("uploadReview", ["#000", paperId, reviewContentState]);
                                });
                            }}>
                            Post
                        </Button>
                    </Box>
                </Box>

                <Divider variant="middle" sx={{ width: 450, mt: 3, mb: 4 }} />

                {
                    //displays the reviews
                    reviewsState.map(review => (
                        <ReviewDisplay review={review}></ReviewDisplay>
                    ))
                }

            </Box>


        </Container>
    )
}

export default PaperDisplay