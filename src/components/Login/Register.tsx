import { Grid } from "@mui/material";
import React from "react"
import loginImage from "../../undraw_login_re_4vu2.svg"
import './Register.css';
import Web3 from 'web3'
const SMART_CONTRACT_ABI = require('../config');
const SMART_CONTRACT_ADDRESS = require('../config');

export class Register extends React.Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);
    }

    state = {
        firstName: '',
        lastName: '',
        password: '',
        email: ''
    }

    handleChangeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({
        firstName: e.target.value
    })

    handleChangeLastName = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({
        lastName: e.target.value
    })

    handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({
        password: e.target.value
    })

    handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({
        email: e.target.value
    })
    // const [selectedFile, setSelectedFile] = useState(null);
    async register() {
        //result;
        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
        const accounts = await web3.eth.getAccounts()
        const contract = new web3.eth.Contract(SMART_CONTRACT_ABI.SMART_CONTRACT_ABI, SMART_CONTRACT_ADDRESS)
        contract.options.address = "0x7d28858a0e87b0a26A93830065a1f2BC47716906"
        this.setState({ contract })
        const userCount = await contract.methods.register(this.state.email, this.state.firstName, this.state.lastName, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida neque arcu, non aliquam lectus aliquet a. Suspendisse placerat mi at erat pellentesque venenatis. Mauris eget congue libero. Aenean viverra tincidunt massa a ultrices.", this.state.password, "0x7b61FC9AbeB0ac95a66E04F8AE69f1DAA842A451").call({ from: accounts[0] }).then((value: any) => {
            // if(value == false){
            console.log(value)


            //}else{
            //console.log("InValid")
            //}
        })
        // this.setState({ username: userCount})
        //console.log(this.state.username)
    }
    render() {
        return (
            <div className="App">
                <div className="register">
                    <div className="container">
                        <div className="base-container">
                            <div className="header">Create new account</div>
                            <div className="content">
                                <div className="image">
                                    <img src={loginImage} />
                                </div>
                                <div className="form">
                                    <Grid container direction="column" spacing={1.5} rowSpacing={1}>
                                        <Grid item container direction="row" xs spacing={2}>

                                            <Grid item xs>
                                                <div className="form-group">
                                                    <label htmlFor="firstname">First name</label>
                                                    <input type="text" name="firstname" placeholder="Enter your first name" value={this.state.firstName} onChange={this.handleChangeFirstName}/>
                                                </div>
                                            </Grid>
                                            <Grid item xs>
                                                <div className="form-group">
                                                    <label htmlFor="lastname">Last name</label>
                                                    <input type="text" name="lastname" placeholder="Enter your last name" value={this.state.lastName} onChange={this.handleChangeLastName} />
                                                </div>
                                            </Grid>
                                        </Grid>
                                        <Grid item container direction="row" xs spacing={1}>

                                            <Grid item xs>
                                                <div className="form-group">
                                                    <label htmlFor="email">Email</label>
                                                    <input type="email" name="email" placeholder="Enter your email" value={this.state.email} onChange={this.handleChangeEmail} />
                                                </div>
                                            </Grid>
                                            <Grid item xs>
                                                <div className="form-group">
                                                    <label htmlFor="password">Password</label>
                                                    <input type="text" name="password" placeholder="Enter your password" value={this.state.password} onChange={this.handleChangePassword} />
                                                </div>
                                            </Grid>
                                            <Grid item xs>
                                                <div className="form-group">
                                                    <label htmlFor="confirmpassword">Confirm Password</label>
                                                    <input type="text" name="confirmpassword" placeholder="Reenter your password" />
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </div>

                                {/* <div className="form">
                                        <div className="form-group">
                                            <label htmlFor="firstname">First name</label>
                                            <input type="text" name="firstname" placeholder="Enter your first name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="lastname">Last name</label>
                                            <input type="text" name="lastname" placeholder="Enter your last name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" name="email" placeholder="Enter your email" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input type="text" name="password" placeholder="Enter your password" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="confirmpassword">Confirm Password</label>
                                            <input type="text" name="confirmpassword" placeholder="Reenter your password" />
                                        </div>
                                    </div> */}
                            </div>
                            <div className="footer">

                                <button type="button" className="btn" onClick={() => this.register()}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

