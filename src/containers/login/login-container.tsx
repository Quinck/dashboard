import * as React from "react";

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
    return <div>Login Container</div>;
  }
}

export default LoginContainer;
