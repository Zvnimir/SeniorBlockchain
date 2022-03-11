import React, { useEffect, useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Card, Button, CardActions, CardContent, Grid, Box } from "@mui/material";
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Web3 from 'web3';
import { Paper } from '../../model/Paper'
import { loadBlockchainData } from '../../domain/blockchain-connector';




const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
    </Box>
);


type PapersProps = {
    papers: Paper[]
}


function Newsfeed({ papers }: PapersProps) {

    let navigate = useNavigate();

    const [paperState, setPaperState] = useState(papers)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //gets data from blockchain
        console.log("Someting")
        loadBlockchainData<Paper[]>("papers").then(result => {
            if (result) {
                console.log(result)
                setPaperState(result)
            }
            //once we get the data we set loading to false
        }).finally(() => {
            setLoading(false);
        });
    }, []);


    //makes sure that undefined states dont throw errors
    if (loading) {
        return <p>Data is loading...</p>;
    }

    return (




        <div>
            <Container maxWidth="md">

                {
                    paperState.map(paper => (


                        < Card sx={{ minWidth: 275, marginTop: 2 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14, backgroundColor: 'success.main', borderRadius: 5, maxWidth: 150, padding: 1, textAlign: 'center', color: 'white' }} gutterBottom>
                                    {
                                        paper.category
                                    }
                                </Typography>
                                <Typography variant="h5" component="div">
                                    {

                                        paper.title
                                    }


                                </Typography>
                                <Typography variant="body2">
                                    {

                                        paper.paperAbstract
                                    }
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small"
                                    onClick={() => {
                                        navigate("../paper", { replace: true });
                                    }}>Learn More</Button>
                            </CardActions>
                        </Card>
                    ))}



                {/* <Card sx={{ minWidth: 275, marginTop: 2 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14, backgroundColor: 'success.main', borderRadius: 5, maxWidth: 150, padding: 1, textAlign: 'center', color: 'white' }} gutterBottom>
                            Computer Science
                        </Typography>
                        <Typography variant="h5" component="div">
                        { 

                        paperState[0].title
                        }
                        
                            Achieving Efficient Structured Concurrency through Lightweight Fibers in Java Virtual Machine

                        </Typography>
                        <Typography variant="body2">
                            Contemporary concurrent server applications, commonly built of smaller and independent services, are using concurrent threads to serve many incoming requests and often have to perform under excessive load. Those applications are relatively easy to develop in general-purpose, imperative programming languages such as Java, and have great tooling support. However, such applications are not easily scalable, mostly due to relying on oversized OS kernel threads, which can be created only in a limited number on finite hardware resources.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card> */}
            </Container>
        </div >
    );
}

export default Newsfeed;

