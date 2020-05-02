import * as React from 'react'
import './station.css';
import Header from '../../components/header/header';

interface StationProps {
    logoutVisible: boolean;
    loggedUser: string;
    handleClickOutside: () => void;
    handleShowLogout: () => void;
    goHome: () => void;
    logout: () => void;
}

class Station extends React.Component<StationProps>{

    public render() {
        const { loggedUser, goHome, logout } = this.props;
        return (
            <div className='station-container'>
                <Header
                    {...this.props}
                    user={loggedUser}
                    goHome={goHome}
                    onClickLogout={logout} />
                <div className='station-content'>
                    station content
                </div>
            </div>
        )
    }

}

export default Station;