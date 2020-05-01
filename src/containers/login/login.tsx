import * as React from "react";
import './login.css';

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
    return <div>Login Container</div>;
  }
}

export default Login;
