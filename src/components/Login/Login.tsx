import loginImage from "../../undraw_login_re_4vu2.svg"
import './Login.css';
import { loadBlockchainData } from '../../domain/blockchain-connector';
import React, { ChangeEvent, useState } from 'react'
import { styled} from '@mui/material'

 function Login() {
    
        const[usernameState, setUsernameState] = useState("")
        const[passwordState, setPasswordState] = useState("")
        
        const handleChangeUsername = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setUsernameState(e.target.value)
        }
    
        const handleChangePassword = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setPasswordState(e.target.value)
        }
    
        return (
            <div className="App">
                <div className="login">
                    <div className="container">
                        <div className="base-container">
                            <div className="header">Login to an existing account</div>
                            <div className="content">
                                <div className="image">
                                    <img src={loginImage} />
                                </div>

                                <div className="form">
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input type="text" name="username" placeholder="Enter your username" onChange={handleChangeUsername} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="text" name="password" placeholder="Enter your password" onChange={handleChangePassword} />
                                    </div>
                                </div>
                            </div>
                            <div className="footer">
                                <button type="button" className="btn" onClick={() => {loadBlockchainData("login", [usernameState, passwordState]).then(result => { console.log(result)})}}>Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
export default Login

