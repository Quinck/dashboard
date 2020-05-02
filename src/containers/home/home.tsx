import * as React from 'react'
import './home.css';
import Header  from '../../components/header';


interface HomeProps {
    logoutVisible: boolean;
    loggedUser: string;
    handleClickOutside: () => void;
    handleShowLogout: () => void;
    goHome: () => void; 
    logout: () => void;
}

class Home extends React.Component<HomeProps>{

    public render() {
        const { loggedUser, goHome, logout } = this.props;
        return (
            <div className='home-container'>
                <Header
                    {...this.props}
                    user={loggedUser}
                    goHome={goHome}
                    onClickLogout={logout}/>
            </div>
        )
    }

}

export default Home;