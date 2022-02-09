import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import App from '../components/App/App';
import { Login } from '../components/Login/Login';
import { Register } from '../components/Login/Register';
import Paper from '../components/Paper/Paper';
import {User} from '../components/User/User';

function Router() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={ <App/> } />
        <Route exact path="/paper" element={ <Paper title={"Test Paper"} domain={"Domain"} description={"Description"}/> } />
        <Route exact path="/register" element={ <Register title={"Test Register"} domain={"Domain"} description={"Description"}/> } />
        <Route exact path="/login" element={ <Login title={"Test Login"} domain={"Domain"} description={"Description"}/> } />
        <Route exact path="/user" element={ <User title={"Test user"} domain={"Domain"} description={"Description"}/> } />
      </Routes>
    </div>
  );
};

export default Router