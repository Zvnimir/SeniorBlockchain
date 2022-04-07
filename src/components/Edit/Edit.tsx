//import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import { User } from "../../model/User";
import { useEffect, useState, ChangeEvent } from "react";
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
