import { Box, Button, Container, styled, TextField, Typography } from '@mui/material'
import React, { ChangeEvent, ChangeEventHandler, useState } from 'react'
import ArticleIcon from '@mui/icons-material/Article';
import { loadBlockchainData } from '../../domain/blockchain-connector';
import { loadBlockchainData_token } from "../../domain/blockchain-connector_token";
import { getUrl, storeFiles } from '../../domain/web3-storage-client';
const Input = styled('input')({
    display: 'none',
});

function UploadPaper() {

    const [titleState, setTitleState] = useState("")
    const [categoryState, setCategoryState] = useState("")
    const [abstractState, setAbstractState] = useState("")
    //we will divide "numberOfWordsState" with the average reading speed (250) to get "minuteRead"
    const [numberOfWordsState, setNumberOfWordsState] = useState("")
    const [fileState, setFileState] = useState<FileList>()
    const [url, setUrl] = useState("")
    const [buttonControl, setControl] = useState(false)

    //handlers for the form
    const handleChangeTitle = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTitleState(e.target.value)
    }

    const handleChangeCategory = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCategoryState(e.target.value)
    }

    const handleChangeAbstract = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setAbstractState(e.target.value)
    }

    const handleChangeNumberOfWords = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNumberOfWordsState(e.target.value)
    }

    const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.files) {
            setFileState(e.target.files)
            getUrl(e.target.files).then((result) => {
                if (result) {
                    console.log(result)
                    setUrl(result)
                    setControl(true)
                } else {
                    console.log("url is not loading");
                }
            })

        }
    }

    return (
        <>
            <Container maxWidth="sm" sx={{ mt: 4, pt: 2 }} >
                <Typography fontWeight={'light'} variant="h5" component="div" align='center' >
                    Upload your paper
                </Typography>

                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate

                >
                    <TextField id="title" label="Title" variant="standard" fullWidth={true} onChange={handleChangeTitle} />
                    <TextField id="category" label="Category" variant="standard" fullWidth={true} onChange={handleChangeCategory} />
                    <TextField id="abstract" label="Abstract" variant="standard" multiline maxRows={4} fullWidth={true} onChange={handleChangeAbstract} />
                    <TextField id="numberOfWords" label="Number of words" variant="standard" type="number" fullWidth={true} onChange={handleChangeNumberOfWords} />

                    <label htmlFor="contained-button-file" >
                        <Input accept="application/pdf" id="contained-button-file" multiple type="file" onChange={handleFileSelected} />
                        <Button sx={{ mt: 2 }} variant="contained" endIcon={<ArticleIcon />} component="span">
                            Attach Paper
                        </Button>
                    </label>

                    <br></br>

                    <Box display="flex"
                        alignItems="center"
                        justifyContent="center">
                        <Button variant="contained" component="span" disabled={buttonControl === false}
                            onClick={() => {
                                //uploads the paper to the blockchain
                                loadBlockchainData_token("uploadPaper").then(result => {
                                    console.log(result)
                                    loadBlockchainData("uploadPaper", [titleState, categoryState, abstractState, (Number.parseInt(numberOfWordsState) / 250), url])
                                })
                                if (fileState) {
                                    storeFiles(fileState)
                                }
                            }}>
                            Publish
                        </Button>
                    </Box>
                </Box>

            </Container>
        </>
    )
}

export default UploadPaper