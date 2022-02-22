import React from 'react'
import { AppBar, Avatar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { useNavigate } from 'react-router-dom';

function Navbar() {

    let navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Senior
                </Typography>
                <IconButton aria-label="delete" size="large" color="inherit" 
                    onClick={() => {
                        navigate("../uploadPaper", { replace: true });
                    }}
                >
                    <FileUploadOutlinedIcon fontSize="inherit" />
                </IconButton>
                <Button
                    onClick={() => {
                        navigate("../user", { replace: true });
                    }}
                >
                    <Avatar sx={{ ml: 1 }}/>
                </Button>
            </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;