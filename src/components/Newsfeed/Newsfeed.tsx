import React, { useEffect, useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Card, Button, CardActions, CardContent, Grid, Box, TextField, Select, MenuItem, InputLabel, FormControl, SelectChangeEvent } from "@mui/material";
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Web3 from 'web3';
import { Paper } from '../../model/Paper'
import { loadBlockchainData } from '../../domain/blockchain-connector';
import PaperCard from '../Paper/PaperCard';

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

    const [category, setCategory] = React.useState('');
    const [sort, setSort] = React.useState('10');

    const handleCategory = (event: SelectChangeEvent) => {
        setCategory(event.target.value);
    };

    const handleSort = (event: SelectChangeEvent) => {
        setSort(event.target.value);
    };

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
            <Container maxWidth="md" sx={{ marginTop: 3 }}>

                <Box sx={{display: 'flex', justifyContent: 'left', width: '100%'}}>
                    <FormControl variant="standard" sx={{ m: 2, minWidth: 120, marginBottom: 3 }}>
                        <TextField id="standard-basic" label="Search" variant="standard" />
                    </FormControl>

                    <FormControl variant="standard" sx={{ m: 2, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={category}
                            onChange={handleCategory}
                            label="Age"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Computer Science</MenuItem>
                            <MenuItem value={20}>Philosophy</MenuItem>
                            <MenuItem value={30}>Psychology</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl variant="standard" sx={{ m: 2, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">Sort</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={sort}
                            onChange={handleSort}
                            label="Age"
                        >
                            <MenuItem value={10}>Recent</MenuItem>
                            <MenuItem value={20}>Top Rated</MenuItem>
                            <MenuItem value={20}>Controversial</MenuItem>
                        </Select>
                    </FormControl>
                </Box>



                {
                    paperState.map(paper => (
                        <PaperCard paper={paper}></PaperCard>
                    ))}

            </Container>
        </div >
    );
}

export default Newsfeed;

