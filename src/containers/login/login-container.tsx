import * as React from "react";
import Login from "./login";

interface LoginContainerState {
  username: string;
  password: string;
}

class LoginContainer extends React.Component<{}, LoginContainerState> {

  constructor(props:any){
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  componentDidMount() {
    document.addEventListener('keypress', this.handleEnterPressed);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleEnterPressed);
  }


  loginIn = () => {
    const {username, password} = this.state;
    if (username && password) window.location.replace("/home");
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
      <Login
        login={this.loginIn}
        changedUsername={this.changedusername}
        changedPassword={this.changedPassword}
      />
    );
  }
}

export default LoginContainer;
