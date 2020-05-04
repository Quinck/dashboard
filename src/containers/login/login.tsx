import * as React from "react";
import './login.css';
import logo from '../../assets/logo.png'
import loading from '../../assets/loading.gif'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

interface LoginProps {
  verifingAuthorization: boolean;
  authError: boolean;
  login: () => void;
  changedUsername: (username: string) => void;
  changedPassword: (password: string) => void;
}

class Login extends React.Component<
  LoginProps
> {

  public render() {
    const { login, changedUsername, changedPassword, authError, verifingAuthorization } = this.props;
    return (
      <div className="login-content">
        <div className="login-title">
          <img className="login-logo" src={logo} alt="Logo" /> uinck Dashboard
          Login
        </div>
        <div className="login-area" >
          <div className="login-area-form">
            <div className="login-field">
              <TextField
                error={authError}
                helperText=""
                id="username-field"
                label="Username"
                autoComplete="current-username"
                variant="outlined"
                onChange={(e) => changedUsername(e.target.value)}
              />
            </div>
            <div className="login-field">
              <TextField
                error={authError}
                helperText={authError && "Username or Password invalid"}
                id="password-field"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                onChange={(e) => changedPassword(e.target.value)}
              />
            </div>
            <div className="login-field login-button-area">
              <div>
                <Button variant="contained" color="primary" onClick={login}>
                  Login
                </Button>
              </div>
              {verifingAuthorization && 
                <div>
                  <img className='loading-gif' src={loading}/>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
