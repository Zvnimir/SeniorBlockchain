import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Paper } from '../../model/Paper';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import grey from '@mui/material/colors/grey';

type PaperCardProps = {
    paper: Paper
}

function PaperCard({ paper }: PaperCardProps) {
    let navigate = useNavigate();

    return (
        <Card sx={{ minWidth: 275, marginTop: 2, marginBottom: 3, backgroundColor: "#F9FEFF", boxShadow: 3, borderRadius: ".7em"}}>
            <CardActionArea onClick={() => {
                navigate("../paper", { state: { paperId: paper.id } });
            }}>
                <CardContent>
                    <Typography variant="h5" component="div" fontWeight={'light'}>
                        {
                            paper.title
                        }
                    </Typography>
                    <Typography variant="body2" fontWeight={'light'} sx={{ mt: 1 }}>
                        {
                            paper.paperAbstract
                        }
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mt: 2, alignItems: 'center' }}>
                        <Typography fontWeight={'light'} sx={{ fontSize: 14, backgroundColor: '#4db6ac', borderRadius: 5, maxWidth: 150, padding: 1, textAlign: 'center', color: 'white' }}>
                            {
                                paper.category
                            }
                        </Typography>
                        <ArrowForwardIosRoundedIcon sx={{color: grey[800]}} />
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default PaperCard