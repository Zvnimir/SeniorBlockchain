import loginImage from "../../undraw_login_re_4vu2.svg"
import './Login.css';
import { loadBlockchainData } from '../../domain/blockchain-connector';
import React, { ChangeEvent, useState } from 'react'
import { Container, styled, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField } from '@mui/material'

function Login(this: any) {
    let navigate = useNavigate();
    const [usernameState, setUsernameState] = useState("")
    const [passwordState, setPasswordState] = useState("")
    const [error1, setErrorState] = useState("")
    const [errors, setErrors] = React.useState<{
        username: string,
        password: string
    }>()

    //useState<{ username: string }>()
    // const [errors, setErrors] = useState({})

    // const initialFormState = {
    //     username: '',
    //     password: ''
    // };

    // const [registration, setRegistration] = useState(initialFormState);

    // const validate = () => {
    //     let temp = { ...errors };
    //     if ('username' in registration)
    //         temp.username = registration.username ? '' : 'This field is required.';
    //     // if ('email' in registration)
    //     //   temp.email = /$^|.+@.+..+/.test(registration.email)
    //     //     ? ''
    //     //     : 'Email is not valid.';
    //     if ('password' in registration)
    //         temp.password =
    //             registration.password.length != 0 ? '' : 'This field is required.';
    //     setErrors({
    //         ...temp,
    //     });

    //     if (registration) return Object.values(temp).every((x) => x == '');
    // };

    // const handleChange = (e) => {
    //     setRegistration({
    //         ...registration,
    //         [e.target.name]: e.target.value,
    //     });
    // };

    // const validate = (fieldValues = values) => {
    //     let temp = { ...errors }
    //     if ('username' in fieldValues)
    //         temp.username = fieldValues.username ? "" : "This field is required."
    //     if ('password' in fieldValues)
    //         temp.password = fieldValues.password ? "" : "This field is required."

    //     setErrors({
    //         ...temp
    //     })

    //     if (fieldValues == values)
    //         return Object.values(temp).every(x => x == "")
    // }

    let error = ''
    let invalidMessage = ''
    let isValid = true

    const handleChangeUsername = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // setErrors({ username: '', password: '' })
        // if (e.target.value.length <= 0) {
        //     isValid = false
        //     invalidMessage = "Invalid username."
        //     setErrors({ username: '', password: invalidMessage })
        // }
        setUsernameState(e.target.value)
        //     const checkedZeroTextLength = e.target.value.length === 0;
        // if (checkedZeroTextLength) {
        //   error = "The input has exceeded the maximum number of characters";
        // } else {
        //   error = '';
        // }
        // temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required."
        // let reg = new RegExp(/^[a-zA-Z0-9]{3,20}$/).test(e.target.value)
        // if (!reg || e.target.value.length <= 0) {
        //     setErrors({ username: 'Username must include at least 3 characters.', password: '' })
        // }

        // setUsernameState(e.target.value)
    }

    const handleChangePassword = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // setErrors({ username: '', password: '' })
        // if (e.target.value.length <= 0) {
        //     isValid = false
        //     invalidMessage = "Invalid password."
        //     setErrors({ username: '', password: invalidMessage })
        // }
        setPasswordState(e.target.value)

        // let reg = new RegExp(/^[a-zA-Z0-9]{0}$/).test(e.target.value)
        // if (!reg || e.target.value.length <= 0) {
        //     setErrors({ username: '', password: 'Password must be entered.' })
        // }

        // setPasswordState(e.target.value)
    }

    const onLogin = (event: React.FormEvent) => {
        event.preventDefault()
        // const { username, password } = event.target
        
        // Call ur function here
        loadBlockchainData("login", [usernameState, passwordState,]).then(result => 
           
            { 
                navigate("../Newsfeed", { replace: true }); 
            }).catch((err) => {
                if(err.message.includes('Incorenct username or password')){
                        setErrorState("This user does not exist")
                }else{
                 console.log(err)
                }
            });
    }

    return (

        <>
            <form onSubmit={onLogin}>

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
                        component="div"
                        sx={{
                            '& > :not(style)': { m: 1 },
                        }}
                        // noValidate

                    >
                        <TextField id="username" label="Username" type="username" name="username" variant="standard" fullWidth={true} onChange={handleChangeUsername}
                            // error={Boolean(errors?.username)}
                            // helperText={(errors?.username)}
                            required
                        // error={errors.username}
                        // helperText={errors.username}
                        // error={this.state.username === ""}
                        // helperText={this.state.username === "" ? 'Empty field!' : ' '}
                        // helperText={error ? "Username is required." : ""}
                        // error={Boolean(error)}
                        />
                        <TextField id="password" label="Password" type="password" name="password" variant="standard" fullWidth={true} onChange={handleChangePassword}
                            // error={Boolean(errors?.password)}
                            // helperText={(errors?.password)}
                            required
                        // error={errors.password}
                        // helperText={errors.password}
                        />

                        <br></br>

                        <Box display="flex"
                            alignItems="center"
                            justifyContent="center">
                            <Button type="submit" variant="contained"
                            //  component="span"
                                // onClick={() => {
                                //     loadBlockchainData("login", [usernameState, passwordState,]).then(result => { navigate("../Newsfeed", { replace: true }); })
                                // }}
                                >
                                Sign In
                            </Button>
                        
                        </Box>
                    </Box>
                    <Typography variant="h6" component="div" align='center' color = 'red' >
                        {error1}
                    </Typography>
                </Container>
            </form>
        </>
    )
}
export default Login

function showError() {
    throw new Error("Function not implemented.");
}

