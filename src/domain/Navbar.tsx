import React from 'react'
import { AppBar, Avatar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    }

    let navigate = useNavigate();

    return (
        <React.Fragment>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Senior
                </Typography>
                <IconButton aria-label="delete" size="large" color="inherit" 
                    onClick={() => {
                        navigate("../newsFeed", { replace: true });
                    }}
                >
                    <HomeIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="delete" size="large" color="inherit" 
                    onClick={() => {
                        navigate("../uploadPaper", { replace: true });
                    }}
                >
                    <FileUploadOutlinedIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="delete" size="large" color="inherit">
                    <NotificationsIcon fontSize="inherit" />
                </IconButton>

                
                {/* <Button
                    // onClick={() => {
                    //     navigate("../user", { replace: true });
                    // }}
                >
                  
                </Button> */}

                  <IconButton
                    onClick={handleClick}
                        size="small"
                        sx={{ ml: 1 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar sx={{ ml: 1 }}/>
                </IconButton>

            </Toolbar>
            </AppBar>
        </Box>

<Menu
anchorEl={anchorEl}
id="account-menu"
open={open}
onClose={handleClose}
onClick={handleClose}
PaperProps={{
  elevation: 0,
  sx: {
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    mt: 1.5,
    '& .MuiAvatar-root': {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: 'background.paper',
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
    },
  },
}}
transformOrigin={{ horizontal: 'right', vertical: 'top' }}
anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
>
<MenuItem onClick={() => {navigate("../user", { replace: true });}}>
  <Avatar /> User page
</MenuItem>
<MenuItem  onClick={() => {navigate("../edit", { replace: true });}}>
  <ListItemIcon>
    <Settings fontSize="small" />
  </ListItemIcon>
  Edit data
</MenuItem>
<MenuItem  onClick={() => {navigate("../login", { replace: true });}}> 
  <ListItemIcon>
    <Logout fontSize="small" />
  </ListItemIcon>
  Logout
</MenuItem>
</Menu>
</React.Fragment>

    )
}


export default Navbar;