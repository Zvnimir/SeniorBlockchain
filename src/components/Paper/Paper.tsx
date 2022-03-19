import { Container, Grid, Typography, Avatar, Box, TextField, Button, Link, Divider } from '@mui/material'
import { title } from 'process';
import React, { ChangeEvent, useEffect, useState } from 'react'
import Web3 from 'web3';
import { Paper } from '../../model/Paper'
import { Review } from '../../model/Review'
import { Document, Page } from 'react-pdf';
import SinglePage from '../../domain/singe-page-pdf';
import { loadBlockchainData } from '../../domain/blockchain-connector';
import ReviewDisplay from '../Review/Review';
import { retrieveFiles } from '../../domain/web3-storage-client';
import { useLocation } from 'react-router-dom';

const SMART_CONTRACT_ABI = require('../config');
const SMART_CONTRACT_ADDRESS = require('../config');


type PaperProps = {
    paper: Paper,
    reviews: Review[]
}

type LocationState = { paperId: string }

function PaperDisplay({paper, reviews}: PaperProps) {

    const location = useLocation();
    const {paperId} = location.state as LocationState

    const[paperState, setPaperState] = useState(paper)

    const[reviewContentState, setReviewContentState] = useState("")

    const[reviewsState, setReviewssState] = useState(reviews)

    //State for pdf disply
    const [file, setFile] = useState<Promise<any>>();
    const [numPages, setNumPages] = useState(null);

    const [loading, setLoading] = useState(true);

    const handleChangeReview = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setReviewContentState(e.target.value)
    }

    useEffect( () => {
        console.log(paperId)

        // display paper data
        loadBlockchainData<Paper>("paper", [paperId]).then(result => {
            if(result) {
                setPaperState(result)
            } 
        }).finally(() => {
            //setLoading(false)
            console.log(paperState)

            loadBlockchainData<Review[]>("paperReviews").then(result => {
                if(result) {
                    setReviewssState(result)
                } 
            }).finally(() => {
                //setLoading(false)
                console.log(reviewsState)

                retrieveFiles('bafybeigcvfby7bcpfp2rkeeotqjck2slvliqsi7pjzgbtjlxag2wclyayy').then(result => {
                    if(result) {
                        setFile(result)
                    }
                }).finally(() => {
                    setLoading(false)
                    console.log(file)
                })
            })
    
        })

       // displaying the reviews
        
        //testing the retrieval of files from web3 storage
        
    }, [])

    function onDocumentLoadSuccess({ numPages: nextNumPages }: any) {
        setNumPages(nextNumPages);
    }
    if (loading) {
        console.log(paperState)
        return <p>Data is loading...</p>;
    }

    return (
                <Container maxWidth="md" sx={{ mt: 4 }}>
                    <Typography variant="h4" component="div">
                        { 
                        //IMPORTANT!!!!!!!!!!
                        // This is currently the only way to access varaibles becasuse the tuple gets messed up in contract to contaract communication
                            paperState[2]
                        }
                        
                    </Typography>
                    <Grid container spacing={2} sx={{ m: 2 }}>
                        <Grid item xs={8}>
                            <Typography variant="body1" component="div">
                                { 
                                    paperState[3] 
                                }
                                
                            </Typography>
                            <Typography variant="body1" component="div" sx={{ mt: 1 }}>
                                { 
                                    paperState[4] 
                                }
                            </Typography>
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={2}>
                            <Typography variant="body1" component="div">
                                { 
                                    paperState[1]
                                }
                                
                            </Typography>  
                        </Grid>
                        <Grid item xs={1}>
                            <Avatar>?</Avatar>
                        </Grid>
                    </Grid>

                    <Box sx={{ justifyContent: 'center', mb: 2 }}>
                        <SinglePage pdf={file}></SinglePage>
                    </Box>

                    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", mt: 4 }}>
                        
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { mt: 1, mb: 1 },
                                width: 450,
                            }}
                            noValidate
                        >
                            <Typography variant="body2" color="text.secondary">
                                Post a review as <Link href="user">Username</Link>
                            </Typography>

                            <TextField id="review"  hiddenLabel placeholder="What are your thoughts?"  multiline rows={6} fullWidth={true} variant="filled" onChange={handleChangeReview}/>
                            
                            <Box display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Button variant="contained" component="span" 
                                    onClick={() => {
                                        loadBlockchainData("uploadReview", ["#000", "0", reviewContentState])
                                }}>
                                    Post
                                </Button>
                            </Box>
                        </Box>

                        <Divider variant="middle" sx={{ width: 450, mt: 3, mb: 4 }}/>
                        
                        {/* Once the paperReviews are implemted in the backend we can uncomment this, same goes for the commented stuff inside the Review component*/}
                        {/* {paperState.paperReviews.map(review => (  
                            <Review review={review}></Review>
                        ))}   */}

                        {/* Add the list of Reviews from the review state */}

                       {
                            reviewsState.map(review => (
                               
                                <ReviewDisplay review={review}></ReviewDisplay>
                            ))
                       }

                        
                        {/* <ReviewDisplay></ReviewDisplay>
                        <ReviewDisplay></ReviewDisplay> */}
                    </Box>
                    

                </Container>
        )
}

export default PaperDisplay