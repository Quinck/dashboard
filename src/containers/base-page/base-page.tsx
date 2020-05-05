import * as React from 'react'
import Header from '../../components/header/header';
import './base-page.css'
import LoadingModal from '../../components/loading-modal/loading-modal';
import LoginCredentialService from '../../services/login-credential-service';
import NavigationBar from '../../components/navigation-bar/navigation-bar';
interface BasePageProps {
    component: any;
    loadingData?: boolean;
    loadingMessage?: string;
}

interface BasePageState {
    loggedUser: string;
}

class BasePage extends React.Component<BasePageProps, BasePageState>{

    constructor(props: any) {
        super(props);
        this.state = {
            loggedUser: LoginCredentialService.getValue()
        }
    }

    goToRegisteredUser() {
        window.location.href = ('/user');
    }
    goToActiveUser() {
        window.location.href = ('/user?active=true');
    }
    goToStation() {
        window.location.href = ('/station');
    }

    goToDashboard() {
        window.location.href = ('/home');
    }

    logout() {
        window.location.href = ('/login');
    }


    public render() {
        const { loadingData, loadingMessage} = this.props;
        return (
            <div className='base-page-container'>
                <Header
                    user={this.state.loggedUser}/>
                <div className='base-page-content'>
                    <div className='navigation-bar-container'>
                    <NavigationBar
                        goToRegisteredUser={this.goToRegisteredUser}
                        goToActiveUser={this.goToActiveUser}
                        goToStation={this.goToStation}
                        goToDashboard={this.goToDashboard}
                        logout={this.logout}
                    />
                    </div>
                    {!loadingData &&
                        <div className='base-page-component'>
                            {this.props.component}
                        </div>
                    }
                    {loadingData && loadingMessage &&
                        <div className='loading-modal-container'>
                            <LoadingModal
                                loadingMessage={loadingMessage}
                            />
                        </div>
                    }
                </div>
            </div>
        )
    }

}

export default BasePage;