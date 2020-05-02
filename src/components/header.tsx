import * as React from 'react';
import './header.css';
import logo from '../assets/logo.png'
import userIcon from '../assets/user-icon.png'
import logoutIcon from '../assets/logout-icon.png'

export interface HeaderProps {
    user: string;
    logoutVisible: boolean;
    logout: () => void;
    goHome: () => void;
    handleShowLogout: () => void;
    onClickLogout: () => void;
    handleClickOutside: () => void;
}


class Header extends React.Component<HeaderProps>{

    public render() {
        const { logoutVisible, goHome, handleShowLogout, user, logout } = this.props;
        return (
                <>
                    <div className='header-container' >
                        <div onClick={goHome}>
                            <img className="header-logo" src={logo} alt="Logo" />
                        </div>
                        <div className='user-area'>
                            <div className='logged-username'>
                                <div>logged as:</div>
                                <div>{user}</div>
                            </div>
                        <div onClick={handleShowLogout}>
                            <img className="header-user-icon" src={userIcon} alt="UserIcon"/>
                            </div>
                        </div>
                    </div>
                    {logoutVisible && 
                    <div className='logout-container' onClick={logout}>
                        <div className='logout-content'>
                            <img className="logout-icon" src={logoutIcon} alt="logoutIcon" />
                            <div>logout</div>
                        </div>
                    </div>
                    }
                </>
        );
    }
}


export default Header; 