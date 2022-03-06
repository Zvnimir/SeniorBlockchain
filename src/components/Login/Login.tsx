import loginImage from "../../undraw_login_re_4vu2.svg"
import './Login.css';
import { loadBlockchainData } from '../../domain/blockchain-connector';
import React, { ChangeEvent, useState } from 'react'
import { Container, styled, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField } from '@mui/material'


function Login() {
    let navigate = useNavigate();
    const [usernameState, setUsernameState] = useState("")
    const [passwordState, setPasswordState] = useState("")

    const handleChangeUsername = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUsernameState(e.target.value)
    }

    const handleChangePassword = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPasswordState(e.target.value)
    }

    return (
        
        <>
            <Container maxWidth="sm" sx={{ mt: 4, pt: 2 }} >
                <Typography variant="h5" component="div" align='center' >
                    Login
                </Typography>
                <Box
                    margin="auto"
                    display="flex"
                    component="img"
                    sx={{
                        height: 235,
                        width: 350,
                        maxHeight: { xs: 235, md: 170 },
                        maxWidth: { xs: 350, md: 250 },
                    }}
                    src={loginImage}
                />
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate

                >
                    <TextField id="username" label="Username" variant="standard" fullWidth={true} onChange={handleChangeUsername} />
                    <TextField id="password" label="Password" variant="standard" fullWidth={true} onChange={handleChangePassword} />

                    <br></br>

                    <Box display="flex"
                        alignItems="center"
                        justifyContent="center">
                        <Button variant="contained" component="span"
                            onClick={() => {
                                loadBlockchainData("login", [usernameState, passwordState,]).then(result => { navigate("../Newsfeed", { replace: true }); })
                            }}>
                            Sign In
                        </Button>
                    </Box>
                </Box>
            </Container>

        </>
    )
}
export default Login

