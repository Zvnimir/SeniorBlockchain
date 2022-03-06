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

const SMART_CONTRACT_ABI = require('../config');
const SMART_CONTRACT_ADDRESS = require('../config');


type PaperProps = {
    paper: Paper,
    reviews: Review[]
}



function PaperDisplay({paper, reviews}: PaperProps) {

    const[paperState, setPaperState] = useState(paper)

    const[reviewContentState, setReviewContentState] = useState("")

    const[reviewsState, setReviewssState] = useState(reviews)

    //State for pdf disply
    const [file, setFile] = useState('./sample.pdf');
    const [numPages, setNumPages] = useState(null);

    const [loading, setLoading] = useState(true);

    const handleChangeReview = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setReviewContentState(e.target.value)
    }

    useEffect( () => {
        // display paper data
        loadBlockchainData<Paper>("paper").then(result => {
            if(result) {
                setPaperState(result)
            } 
        }).finally(() => {
            setLoading(false)
            console.log(paperState)
        })

        // displaying the reviews
        loadBlockchainData<Review[]>("paperReviews").then(result => {
            if(result) {
                setReviewssState(result)
            } 
        }).finally(() => {
            setLoading(false)
            console.log(reviewsState)
        })


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
                            <Avatar>?</Avatar>
                        </Grid>
                    </Grid>

                    {/* <Box sx={{ justifyContent: 'center', mb: 2 }}>
                        <SinglePage pdf={file}></SinglePage>
                    </Box> */}

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