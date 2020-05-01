import * as React from "react";
import Login from "./login";

interface LoginContainerProps {
  state?: string;
}

interface LoginContainerState {
  prop?: string;
}

class LoginContainer extends React.Component<
  LoginContainerProps,
  LoginContainerState
> {
  public render() {
    return <Login/>;
  }
}

export default LoginContainer;
