import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import loginImage from "../../undraw_login_re_4vu2.svg"
import './Register.css';
import { loadBlockchainData } from '../../domain/blockchain-connector';
import React, { ChangeEvent, ChangeEventHandler, useState } from 'react'

function Register() {

    const [firstName, setFirstNameState] = useState("")
    const [lastName, setLastNameState] = useState("")
    const [password, setPasswordState] = useState("")
    const [email, setEmailState] = useState("")


    const handleChangeFirstName = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFirstNameState(e.target.value)
    }

    const handleChangeLastName = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setLastNameState(e.target.value)
    }

    const handleChangePassword = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPasswordState(e.target.value)
    }

    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEmailState(e.target.value)
    }
    /** 
        async register() {
            //result;
            const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
            const accounts = await web3.eth.getAccounts()
            const contract = new web3.eth.Contract(SMART_CONTRACT_ABI.SMART_CONTRACT_ABI, SMART_CONTRACT_ADDRESS)
            contract.options.address = "0x7d28858a0e87b0a26A93830065a1f2BC47716906"
            this.setState({ contract })
            const userCount = await contract.methods.register(this.state.email, this.state.firstName, this.state.lastName, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida neque arcu, non aliquam lectus aliquet a. Suspendisse placerat mi at erat pellentesque venenatis. Mauris eget congue libero. Aenean viverra tincidunt massa a ultrices.", this.state.password, "0x7b61FC9AbeB0ac95a66E04F8AE69f1DAA842A451").call({ from: accounts[0] }).then((value: any) => {
                // if(value == false){
                console.log(value)
    
    
                //}else{
                //console.log("InValid")
                //}
            })
            // this.setState({ username: userCount})
            //console.log(this.state.username)
        }
        */

    return (

        <>
            <Container maxWidth="sm" sx={{ mt: 4, pt: 2 }} >
                <Typography variant="h5" component="div" align='center' >
                    Create new account
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
                    <TextField id="firstname" label="First Name" variant="standard" fullWidth={true} onChange={handleChangeFirstName} />
                    <TextField id="lastname" label="Last Name" variant="standard" fullWidth={true} onChange={handleChangeLastName} />
                    <TextField id="email" label="Email" variant="standard" fullWidth={true} onChange={handleChangeEmail} />
                    <TextField id="password" label="Password" variant="standard" fullWidth={true} onChange={handleChangePassword} />
                    <TextField id="confirmpassword" label="Confirm Password" variant="standard" fullWidth={true} />

                    <br></br>

                    <Box display="flex"
                        alignItems="center"
                        justifyContent="center">
                        <Button variant="contained" component="span"
                            onClick={() => {
                                loadBlockchainData("register", [email, firstName, lastName, password]).then(result => { console.log(result) })
                            }}>
                            Sign Up
                        </Button>
                    </Box>
                </Box>
            </Container>

        </>
    );
}
export default Register

