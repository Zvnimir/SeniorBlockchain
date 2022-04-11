import { Avatar, Box, Button, ButtonGroup, Card, CardContent, CardHeader, Container, Grid, Typography } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { Review } from '../../model/Review';
import { useLocation } from 'react-router-dom';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { loadBlockchainData } from "../../domain/blockchain-connector";

type ReviewProps = {
    review: Review
}

type LocationState = { paperId: string }

function ReviewDisplay({ review }: ReviewProps) {

    const location = useLocation();
    const { paperId } = location.state as LocationState
    const [disable, setDisable] = React.useState(false);

    useEffect(() => {
        console.log("id of paper", paperId)
        console.log(review);
        console.log("id of review", review.id)
    })

    return (
        <Card sx={{ width: 450, mb: 4 }} elevation={4} >
            <CardHeader
                title={<Typography variant="body1" fontWeight={'light'} >
                    Rating: {review.likes - review.dislikes}
                </Typography>}
                action={
                    <ButtonGroup color="success" sx={{ mr: 1, mt: .4 }}>
                        <Button color="success" onClick={() => {
                            loadBlockchainData("sendReaction", [paperId, review.id, 1]).then(result => {
                                //disabled = {true}
                                //setDisable(true)
                                console.log(paperId)
                                console.log(review.id)
                                console.log(result)
                            });
                        }}><ThumbUpIcon></ThumbUpIcon></Button>
                        <Button color="error" onClick={() => {
                            loadBlockchainData("sendReaction", [paperId, review.id, 2]).then(result => {
                                //disabled = {true}
                                //setDisable(true)
                                console.log(result)
                            });
                        }}><ThumbDownIcon></ThumbDownIcon></Button>
                    </ButtonGroup>
                }
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {review.content}
                </Typography>
            </CardContent> 
        </Card>
    )
}

export default ReviewDisplay