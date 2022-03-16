import * as React from 'react';
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

function Edit() {

  return (
    <div className="App">

 
<Box sx={{ display: 'flex', flexWrap: 'wrap', width: '60ch' }}>
<Typography variant="h4" gutterBottom component="div"  sx={{ m: 1, width: '24ch' }}>
      Edit data
      </Typography>
    <div>
        <TextField
          id="outlined"
          sx={{ m: 1, width: '24ch' }}
          label="First Name"
          defaultValue="Jon"
          variant="standard"
        />
    </div>
    <div>
        <TextField
          id="outlined"
          sx={{ m: 1, width: '24ch' }}
          label="Last Name"
          variant="standard"
          defaultValue="Doe"
        />
    </div>

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

    <div>
        <TextField
          id="outlined"
          sx={{ m: 1, width: '50ch' }}
          label="Email"
          variant="standard"
          defaultValue="jondoe@gmail.com"
        />
    </div>

    <div>
    <TextField  sx={{ m: 1, width: '50ch' }} defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non vestibulum dolor, non dapibus dui. Vivamus non urna urna.  " id="abstract" label="Bibliography" variant="standard" multiline maxRows={4} fullWidth={true}/>
    </div>
      
      
      <Button variant="contained" size="medium"  sx={{ m: 1, width: '5ch' }}>Save</Button>
    
      </Box>
 

    </div>

  );
}

export default Edit;
