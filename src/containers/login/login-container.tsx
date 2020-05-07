import * as React from "react";
import Login from "./login";
import { LoginService } from '../../services/login-service';
import loginCredentialService from '../../services/login-credential-service';
import { Redirect } from 'react-router-dom'

interface LoginContainerState {
  username: string;
  password: string;
  verifingAuthorization: boolean;
  authError: boolean;
  redirect: boolean
}

class LoginContainer extends React.Component<{}, LoginContainerState> {

  loginService: LoginService = new LoginService();

  constructor(props: any) {
    super(props);
    this.state = {
      username: '',
      password: '',
      verifingAuthorization: false,
      authError: false,
      redirect: false
    }
  }

  componentDidMount() {
    document.addEventListener('keypress', this.handleEnterPressed);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleEnterPressed);
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/home' />
    }
  }


  loginIn = () => {
    const { username, password } = this.state;
    this.setState({ verifingAuthorization: true },
      () => {
        this.loginService.validateLoginData(username, password).then((displayedName) => {
          if (displayedName) {
            loginCredentialService.setValue(displayedName);
            this.setRedirect();
          }
        }).catch(() => {
          this.setState({ authError: true, verifingAuthorization: false });
        });
      });

  };

  changedusername = (newUsername: string) => {
    this.setState({
      username: newUsername
    });
  }

  changedPassword = (newPassword: string) => {
    this.setState({
      password: newPassword
    });
  }

  handleEnterPressed = (e: any) => {
    if (e.key === 'Enter' && this.state.username && this.state.password) {
      this.loginIn();
    }
  }

  public render() {
    return (
      <div>
        {this.renderRedirect()}
        <Login
          {...this.state}
          login={this.loginIn}
          changedUsername={this.changedusername}
          changedPassword={this.changedPassword}
        />
      </div>
    );
  }
}

export default LoginContainer;
