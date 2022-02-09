import React from 'react'
import logo from './logo.svg'
import './App.css'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'


function App() {
  return (

      <div className="App" >
        <div className="centered">
          <Typography variant="h2" component="div" gutterBottom>
            Senior Blockchain
          </Typography>
          <Button variant="contained" onClick = { () => alert('hello') }>
            <Typography variant="button" display="block" gutterBottom >
              test
            </Typography>
          </Button>
        </div>
      </div>

  );
}

export default App;
