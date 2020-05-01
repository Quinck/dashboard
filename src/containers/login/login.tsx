import * as React from "react";
import './login.css';
import logo from '../../assets/logo.png'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

interface LoginProps {
  state?: string;
}

interface LoginState {
  prop?: string;
}

class Login extends React.Component<
  LoginProps,
  LoginState
> {
  public render() {
    return (
      <div className="login-content">
        <div className="login-title">
          <img className="login-logo" src={logo} alt="Logo" /> uinck Dashboard
          Login
        </div>
        <div className="login-area">
          <div className="login-area-form">
            <div className="login-field">
              <TextField
                id="username-field"
                label="Username"
                autoComplete="current-username"
                variant="outlined"
              />
            </div>
            <div className="login-field">
              <TextField
                id="password-field"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
              />
            </div>
            <div className="login-field">
              <Button variant="contained" color="primary">
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
