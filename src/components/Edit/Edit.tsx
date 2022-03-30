//import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import { User } from "../../model/User";
import React, { useEffect, useState, ChangeEvent } from "react";
import { loadBlockchainData } from "../../domain/blockchain-connector";

type UserProps = {
  user: User;
 
};
function Edit({ user}: UserProps) {
const [userState, setUserState] = useState(user);
const [loading, setLoading] = useState(true);
const [firstNameState, setFirstNameState] = useState("")
const [lastNameState, setLastNameState] = useState("")
const [emailState, setEmailState] = useState("")
const [biographyState, setBiographyState] = useState("")

useEffect(() => {
  //gets data from blockchain

   loadBlockchainData<User>("user")
     .then((result) => {
       if (result) {
         setUserState(result);
         console.log(result)
       }
       //once we get the data we set loading to false
       
      })
     .finally(() => {
      setLoading(false);
      
     });
    
   }, []);

   if (loading) {
    return <p>Data is loading...</p>;
  }
  const handleChangeFirstName = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFirstNameState(e.target.value)
  }
  
  const handleChangeLastName = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLastNameState(e.target.value)
  }

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmailState(e.target.value)
  }

  const handleChangeBiography= (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBiographyState(e.target.value)
  }
 

  const onSave = () => {
    //loadBlockchainData("editUser", [emailState, firstNameState, lastNameState, biographyState]).then(result => { console.log(result) });
    console.log("hello")
  }
return (
    <div className="App">
  
 
<Box sx={{ display: 'flex', flexWrap: 'wrap', width: '60ch' }}>
<Typography variant="h4" gutterBottom component="div"  sx={{ m: 1, width: '24ch' }}>
      Edit data
      </Typography>
    
        <TextField
          id="outlined"
          sx={{ m: 1, width: '24ch' }}
          label="First Name"
          defaultValue={userState.firstName}
          variant="standard"
          onChange={handleChangeFirstName}
        />
   
        <TextField
          id="outlined"
          sx={{ m: 1, width: '24ch' }}
          label="Last Name"
          variant="standard"
          defaultValue={userState.firstName}
          onChange={handleChangeLastName}
        />
   
    {/* <div>
    <FormControl sx={{ m: 1, width: '50ch' }}  variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            // type={values.showPassword ? 'text' : 'password'}
            // value={values.password}
            // onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                //   onClick={handleClickShowPassword}
                //   onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {/* {values.showPassword ? <VisibilityOff /> : <Visibility />} 
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
    </div> */}

   
        <TextField
          id="outlined"
          sx={{ m: 1, width: '50ch' }}
          label="Email"
          variant="standard"
          defaultValue={userState.email}
          onChange={handleChangeEmail}
        />
   

   
    <TextField  sx={{ m: 1, width: '50ch' }} defaultValue={userState.biography} id="abstract" label="Bibliography" variant="standard" multiline maxRows={4} fullWidth={true}  onChange={handleChangeBiography}/>
   
      
      
      <Button variant="contained" size="medium"  sx={{ m: 1, width: '5ch' }}onClick={() => {
                                        loadBlockchainData("editUser", [emailState, firstNameState, lastNameState, biographyState, userState.passwordHash]).then(result => { console.log(result) });
                                    }}>Save</Button>
    
      </Box>
 
 
    </div>

  );
}

export default Edit;
