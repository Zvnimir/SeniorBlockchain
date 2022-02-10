import { Grid } from "@mui/material";
import React from "react"
import loginImage from "../../undraw_login_re_4vu2.svg"
import './Register.css';

export class Register extends React.Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);
    }
    // const [selectedFile, setSelectedFile] = useState(null);

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
                                    <Grid container spacing={1.5} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                        <Grid item xs={6}>
                                            <div className="form-group">
                                                <label htmlFor="firstname">First name</label>
                                                <input type="text" name="firstname" placeholder="Enter your first name" />
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div className="form-group">
                                                <label htmlFor="lastname">Last name</label>
                                                <input type="text" name="lastname" placeholder="Enter your last name" />
                                            </div>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input type="email" name="email" placeholder="Enter your email" />
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div className="form-group">
                                                <label htmlFor="password">Password</label>
                                                <input type="text" name="password" placeholder="Enter your password" />
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div className="form-group">
                                                <label htmlFor="confirmpassword">Confirm Password</label>
                                                <input type="text" name="confirmpassword" placeholder="Reenter your password" />
                                            </div>
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
                                <button type="button" className="btn">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}