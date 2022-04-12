import React, { useEffect, useState } from 'react'
import { AppBar, Avatar, Box, Button, Fab, IconButton, Toolbar, Typography } from '@mui/material';
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
import LogoDevIcon from '@mui/icons-material/LogoDev';
import { grey } from '@mui/material/colors';
import HelpIcon from '@mui/icons-material/Help';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { loadBlockchainData } from './blockchain-connector';
import { User } from '../model/User';

type NavbarProps = {
  user: User;
};

function Navbar({user}: NavbarProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [userState, setUserState] = useState(user);
  const [loading, setLoading] = useState(true);


  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }

  useEffect(() => {
    loadBlockchainData<User>("user")
      .then((result) => {
        if (result) {
          setUserState(result);
          console.log(result)
        }
      })
      .finally(() => {
        setLoading(false);
       })
  }, []);

  let navigate = useNavigate();

  if (loading) {
    return <p></p>;
  }

  return (
    <>
      <React.Fragment>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{ backgroundColor: '#F3EDF7' }}>
            <Toolbar disableGutters >
              <Box sx={{ flexGrow: 1 }}>
                <IconButton aria-label="delete" size="large" color="inherit"
                  onClick={() => {
                    navigate("../newsFeed", { replace: true });
                  }}
                >
                  <LogoDevIcon fontSize="large" sx={{ color: grey[800] }} />
                </IconButton>
              </Box>

              <IconButton aria-label="delete"
                onClick={() => {
                  navigate("../uploadPaper", { replace: true });
                }}
              >
                <FileUploadOutlinedIcon fontSize="large" sx={{ color: grey[800] }} />
              </IconButton>

              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: .5, mr: 1.5 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar sx={{ ml: 1 }} />
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
          <MenuItem onClick={() => { navigate("../user", { replace: true }); }}>
            <Avatar /> User page
          </MenuItem>
          {(userState.role > 2) ? <MenuItem onClick={() => { navigate("../admin", { replace: true }); }}>
            <ListItemIcon>
              <AdminPanelSettingsIcon fontSize="small" />
            </ListItemIcon>
            Admin Page
          </MenuItem> : <></>}
          <MenuItem onClick={() => { navigate("../edit", { replace: true }); }}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Edit data
          </MenuItem>
          <MenuItem onClick={() => { navigate("../login", { replace: true }); }}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </React.Fragment>

      <Fab aria-label="add" size="medium" sx={{position: 'fixed', bottom: 20, right: 20, color: grey[800], backgroundColor: '#F3EDF7', shadow: 3,}}>
        <HelpIcon />
      </Fab>
    </>
  )
}


export default Navbar;