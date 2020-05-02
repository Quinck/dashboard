import * as React from 'react'
import User from './user';

interface UserContainerState {
    logoutVisible: boolean;
    loggedUser: string;
}

class UserContainer extends React.Component<{}, UserContainerState>{

    constructor(props: any) {
        super(props);
        this.state = {
            logoutVisible: false,
            loggedUser: 'Umberto'
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    }

    handleClickOutside = () => {
        this.setState({
            logoutVisible: false
        });
    }

    handleShowLogout = () => {
        document.removeEventListener('click', this.handleClickOutside);
        this.setState({
            logoutVisible: !this.state.logoutVisible
        });
        document.addEventListener('click', this.handleClickOutside);
    }

    goHome = () => {
        window.location.href = ('/home');
    }

    logout = () => {
        document.removeEventListener('click', this.handleClickOutside);
        window.location.href = ('/login');
        document.addEventListener('click', this.handleClickOutside);
    }


    public render() {
        return (
            <User
                {...this.state}
                handleClickOutside={this.handleClickOutside}
                handleShowLogout={this.handleShowLogout}
                goHome={this.goHome}
                logout={this.logout} />
        )
    }

}

export default UserContainer;