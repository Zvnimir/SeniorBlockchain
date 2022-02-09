import React from "react"
import loginImage from "../../undraw_login_re_4vu2.svg"
import './Register.css';

export class Register extends React.Component {
    
    // const [selectedFile, setSelectedFile] = useState(null);

    render() {
        return (
            <div className="App">
                <div className="login">
                    <div className="register">
                        <div className="container">
                            <div className="base-container">
                                <div className="header">Create new account</div>
                                <div className="content">
                                    <div className="image">
                                        <img src={loginImage} />
                                    </div>

                                    <div className="form">
                                        <div className="form-group">
                                            <label htmlFor="username">Username</label>
                                            <input type="text" name="username" placeholder="Enter your username" />
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
                                            <label htmlFor="credentials">Credentials</label>
                                            <input type="text" name="credentials" placeholder="Upload your credentials" />
                                            {/* <input type="file" value={selectedFile} onChange={(e) => setSelectedFile(e.target.files[0])}/> */}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="specialty">Specialty</label>
                                            <input type="text" name="specialty" placeholder="Choose your specialty" />
                                        </div>
                                    </div>
                                </div>
                                <div className="footer">
                                    <button type="button" className="btn">Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}