import { Box, Button, Container, styled, TextField, Typography } from '@mui/material'
import React from 'react'
import ArticleIcon from '@mui/icons-material/Article';

const Input = styled('input')({
    display: 'none',
});

function UploadPaper() {
    return (
        <>
            
            <Container maxWidth="sm" sx={{ mt: 4, pt: 2 }} >
                <Typography variant="h5" component="div" align='center' >
                    Upload your paper
                </Typography>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="title" label="Title" variant="standard" fullWidth={true} />
                    <TextField id="domain" label="Domain" variant="standard" fullWidth={true} />
                    <TextField id="description" label="Description" variant="standard"  fullWidth={true}/>
                    <label htmlFor="contained-button-file" >
                        <Input accept="application/pdf" id="contained-button-file" multiple type="file" />
                        <Button sx={{ mt: 2 }} variant="contained" endIcon={<ArticleIcon />} component="span">
                            Attach Paper
                        </Button>
                    </label>
                    <br></br>
                    <Box display="flex"
                        alignItems="center"
                        justifyContent="center">
                    <Button variant="contained" component="span">
                        Publish
                    </Button>
                </Box>
                    </Box>
                    
            </Container>
        </>
    ) 
}

export default UploadPaper