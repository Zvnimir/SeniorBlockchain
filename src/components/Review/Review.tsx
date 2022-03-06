import { Avatar, Box, Button, ButtonGroup, Card, CardContent, CardHeader, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { Review } from '../../model/Review';

type ReviewProps = {
    review: Review
}

function ReviewDisplay({review}: ReviewProps) {

    return(
            <Card sx={{ maxWidth: 450, mb: 4}} elevation={4} >
                <CardHeader
                    avatar={
                    <Avatar></Avatar>
                    }
                   // title="Name Surname"
                    title={review.authorHash}
                    action={
                        <ButtonGroup variant="contained" color="success" sx={{mr: 1, mt:.4}}>
                            <Button color="success"><ThumbUpIcon></ThumbUpIcon></Button>
                            <Button color="error"><ThumbDownIcon></ThumbDownIcon></Button>
                        </ButtonGroup>
                    }
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {review.content}
                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat ligula. Maecenas ut gravida lacus. Suspendisse mollis magna at dui tempus euismod. Phasellus luctus condimentum turpis, blandit viverra ligula condimentum vel. */}
                    </Typography>
                </CardContent>
            </Card>
    )
}

export default ReviewDisplay