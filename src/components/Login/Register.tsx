import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import loginImage from "../../undraw_login_re_4vu2.svg"
import './Register.css';
import { loadBlockchainData } from '../../domain/blockchain-connector';
import React, { ChangeEvent, useState } from 'react'
import ArticleIcon from '@mui/icons-material/Article';
import { storeFiles } from '../../domain/web3-storage-client'
import {styled} from '@mui/material'
import { useNavigate } from 'react-router-dom';

const Input = styled('input')({
    display: 'none',
  });

function Register() {
    let navigate = useNavigate();
    const [firstName, setFirstNameState] = useState("")
    const [lastName, setLastNameState] = useState("")
    const [password, setPasswordState] = useState("")
    const [email, setEmailState] = useState("")
    const [biography, setBiographyState] = useState("")
    const [errors, setErrors] = React.useState<{
        firstName: string,
        lastName: string,
        password: string,
        email: string,
        confirmedPassword: string
      }>()
    const[fileState, setFileState] = useState<FileList>()
    
  const handleChange = (e) => {
    e.preventDefault();
  };

    const handleChangeFirstName = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
       setFirstNameState(e.target.value)
       if(e.target.value.match(new RegExp(/^[a-zA-Z]+$/))){
        setErrors({ firstName: '', lastName: '', email: '', password: '', confirmedPassword: ''})
        }else{
        setErrors({ firstName: 'Invalid format of name. Name should include only letters', lastName: '', email: '', password: '', confirmedPassword: ''})
        }
    }

    const handleChangeLastName = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setLastNameState(e.target.value)
        if(e.target.value.match(new RegExp(/^[a-zA-Z]+$/))){
            setErrors({ firstName: '', lastName: '', email: '', password: '', confirmedPassword: ''})
            }else{
                setErrors({ firstName: '', lastName: 'Invalid format of last name. Last Name should include only letters', email: '', password: '', confirmedPassword: ''})
            }
    }

    const handleChangePassword = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPasswordState(e.target.value)
        if(e.target.value.match(new RegExp(/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/))){
            setErrors({ firstName: '', lastName: '', email: '', password: '', confirmedPassword: ''})
            }else{
                setErrors({ firstName: '', lastName: '', email: '', password: 'Invalid password. Minimum eight characters, at least one letter and one number', confirmedPassword: ''})
            }
        }

    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEmailState(e.target.value)
        if(e.target.value.match(new RegExp(/$^|.+@.+..+/))){
            setErrors({ firstName: '', lastName: '', email: '', password: '', confirmedPassword: ''})
            }else{
            setErrors({ firstName: '', lastName: '', email: 'Invalid format of last email', password: '', confirmedPassword: ''})
           }
      }

      const handleChangeBiography = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setBiographyState(e.target.value)
       }

    const handleMatchedPassword = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if(password === e.target.value){
            setErrors({ firstName: '', lastName: '', email: '', password: '', confirmedPassword: ''})
        }else{
            setErrors({ firstName: '', lastName: '', email: '', password: '', confirmedPassword: 'Passwords do not match'})
        }
       }

    const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if(e.target.files) {
            setFileState(e.target.files)
        }
    }

    const onRegister = (event: React.FormEvent) => {
        event.preventDefault()
        if(fileState) {
        storeFiles(fileState)};

        // register method also request initial authentification on the contract side
        loadBlockchainData("register", [email, firstName, lastName, biography, password]).then(result => { 
            navigate("../login", { replace: true });
            console.log(result) });
       }

    return (
       
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
                    onSubmit={onRegister}>
                    <TextField id="firstname" label="First Name" variant="standard" fullWidth={true} onChange={handleChangeFirstName}
                     error={Boolean(errors?.firstName)}
                     helperText={(errors?.firstName)}
                    required
                    />
                    <TextField id="lastname" label="Last Name" variant="standard" fullWidth={true} onChange={handleChangeLastName}
                     error={Boolean(errors?.lastName)}
                     helperText={(errors?.lastName)}
                    required
                     />
                    <TextField id="email" label="Email" variant="standard" fullWidth={true} onChange={handleChangeEmail}
                    error={Boolean(errors?.email)}
                    helperText={(errors?.email)}
                    required
                     />
                    <TextField id="biography" label="Biography" variant="standard" fullWidth={true} onChange={handleChangeBiography}
                    multiline rows={3} maxRows={5} required/>
                    <TextField id="password" label="Password" variant="standard" type="password" fullWidth={true} onChange={handleChangePassword}
                    error={Boolean(errors?.password)}
                    helperText={(errors?.password)}
                    required
                     />
                    <TextField id="confirmpassword" label="Confirm Password" variant="standard" type="password" fullWidth={true}   onPaste={handleChange} onChange={handleMatchedPassword} 
                     error={Boolean(errors?.confirmedPassword)}
                     helperText={(errors?.confirmedPassword)}
                    required/>

                    <br></br>
                    
              <Grid container style={{ gap: 90 }}>
               <Grid item xs={6}>

               <Typography variant="body2" color="text.secondary">
                          In order to register, user should upload a document approval. 
                          User will be informed via email for the approval.
                        </Typography>
                 
               </Grid>

               <Grid item xs="auto">
               <label htmlFor="contained-button-file" >
                        <Input accept="application/pdf" id="contained-button-file" multiple type="file" onChange={handleFileSelected} />
                        <Button sx={{ mt: 2 }} variant="contained" endIcon={<ArticleIcon />} component="span">
                            Attach Paper
                        </Button>
                    </label>
               </Grid>
            </Grid>
                    <Box display="flex"
                        alignItems="center"
                        justifyContent="center">
                        <Button type="submit" variant="contained" disabled={Boolean(errors?.firstName) || Boolean(errors?.lastName) || Boolean(errors?.email) || Boolean(errors?.password) || Boolean(errors?.confirmedPassword)}>
                                Sign Up
                        </Button>
                    </Box>
                </Box>
                
                <Box display="flex"
                    justifyContent="center"
                    sx={{ marginTop: 2}}>
                        
                        <Typography>Already have an account? 
                                <Button variant="text" 
                                    onClick={() => {
                                        navigate("../login")
                                    }}>
                                    Log In.
                                </Button>
                        </Typography>
                </Box>

            </Container>
        );
}
export default Register


