import React from "react"
import loginImage from "../../undraw_login_re_4vu2.svg"
import './Login.css';

export class Login extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

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
                                        <label htmlFor="email">Email</label>
                                        <input type="text" name="email" placeholder="Enter your email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="text" name="password" placeholder="Enter your password" />
                                    </div>
                                </div>
                            </div>
                            <div className="footer">
                                <button type="button" className="btn">Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
