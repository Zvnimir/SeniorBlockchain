import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import App from '../components/App/App';
//import { Login } from '../components/Login/Login';
import Register from '../components/Login/Register';
import PaperDisplay from '../components/Paper/Paper';
import UserDisplay from '../components/User/User';
import Admin from '../components/Admin/Admin';
import Navbar from '../domain/Navbar'
import Edit from '../components/Edit/Edit';
import { AppBar, Avatar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { useNavigate } from 'react-router-dom';
import UploadPaper from '../components/Paper/UploadPaper';
import Newsfeed from '../components/Newsfeed/Newsfeed';
import Login from '../components/Login/Login';
import Paper from '../components/Paper/Paper'
import Guide from '../components/Guide/Guide'


export default Router

function Router() {
    //routes for the whole app
    return (<>
        <Navbar />
        <Routes>
            <Route exact path="/" element={< Login />} />
            <Route exact path='/uploadPaper' element={<UploadPaper />} />
            <Route exact path="/register" element={< Register />} />
            <Route exact path="/login" element={< Login />} />
            <Route exact path="/user" element={< UserDisplay />} />
            <Route exact path="/edit" element={< Edit />} />
            <Route exact path='/admin' element={<Admin />} />
            <Route exact path="/newsfeed" element={<Newsfeed />} />
            <Route exact path="/paper" element={<Paper />} />
            <Route exact path="/guide" element={<Guide />} />
        </Routes>
    </>
    );
};