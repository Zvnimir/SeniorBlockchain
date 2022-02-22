import React from "react"
import Web3 from "web3";
import loginImage from "../../undraw_login_re_4vu2.svg"
import './Login.css';

const SMART_CONTRACT_ABI = require('../config');
const SMART_CONTRACT_ADDRESS = require('../config');

export class Login extends React.Component {


    state = {
        username: '',
        password: ''
    }

    handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({
        username: e.target.value
    })

    handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({
        password: e.target.value
    })



    async login() {
        //result;
        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
        const accounts = await web3.eth.getAccounts()
        const contract = new web3.eth.Contract(SMART_CONTRACT_ABI.SMART_CONTRACT_ABI, SMART_CONTRACT_ADDRESS)
        contract.options.address = "0x7d28858a0e87b0a26A93830065a1f2BC47716906"
        this.setState({ contract })
        const userCount = await contract.methods.login(this.state.username, this.state.password, "0xE0B6e5538CE13841B19A022cA671a1177a3B7d83").call({ from: accounts[0] }).then((value: any) => {
            if (value == true) {
                console.log("done")
            } else {
                console.log("oops")
            }
        })
        //this.setState({ username: userCount})
        console.log(userCount)
    }
    render() {
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
                                        <input type="text" name="username" placeholder="Enter your username" value={this.state.username} onChange={this.handleChangeUsername} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="text" name="password" placeholder="Enter your password" value={this.state.password} onChange={this.handleChangePassword} />
                                    </div>
                                </div>
                            </div>
                            <div className="footer">
                                <button type="button" className="btn" onClick={() => this.login()}>Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
