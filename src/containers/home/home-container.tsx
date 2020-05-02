import * as React from 'react'
import Home from './home';

interface HomeContainerState {
    logoutVisible: boolean;
    loggedUser: string;
}

class HomeContainer extends React.Component<{}, HomeContainerState>{

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
        window.location.href=('/home');
    }

    logout = () => {
        document.removeEventListener('click', this.handleClickOutside);
        window.location.href=('/login');
        document.addEventListener('click', this.handleClickOutside);
    }

    goToUser(){
        window.location.href = ('/user');
    }

    goToStation() {
        window.location.href = ('/station');
    }

    public render(){
        return(
            <Home
                {...this.state}
                handleClickOutside={this.handleClickOutside}
                handleShowLogout={this.handleShowLogout}
                goHome={this.goHome}
                logout={this.logout}
                goToUser={this.goToUser}
                goToStation={this.goToStation}/>
        )
    }

}

export default HomeContainer;