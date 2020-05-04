import * as React from 'react'
import Header from '../../components/header/header';
import './base-page.css'
import LoadingModal from '../../components/loading-modal/loading-modal';

interface BasePageProps {
    component: any;
    loadingData?: boolean;
    loadingMessage?: string;
}

interface BasePageState {
    logoutVisible: boolean;
    loggedUser: string;
}

class BasePage extends React.Component<BasePageProps, BasePageState>{

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
        const { loadingData, loadingMessage} = this.props;
        return (
            <div className='base-page-container'>
                <Header
                    logoutVisible={this.state.logoutVisible}
                    user={this.state.loggedUser}
                    handleClickOutside={this.handleClickOutside}
                    handleShowLogout={this.handleShowLogout}
                    onClickLogout={this.logout}
                    logout={this.logout}
                    goHome={this.goHome} />
                {!loadingData && 
                    <div className='base-page-component'>
                        {this.props.component}
                    </div>
                }
                { loadingData && loadingMessage && 
                    <div className='loading-modal-container'>
                        <LoadingModal
                            loadingMessage={loadingMessage}
                        />   
                    </div>
                }
            </div>
        )
    }

}

export default BasePage;