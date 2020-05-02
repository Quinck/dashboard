import * as React from 'react'
import './user.css';
import Header from '../../components/header/header';

interface UserProps {
    logoutVisible: boolean;
    loggedUser: string;
    handleClickOutside: () => void;
    handleShowLogout: () => void;
    goHome: () => void;
    logout: () => void;
}

class User extends React.Component<UserProps>{

    public render() {
        const { loggedUser, goHome, logout  } = this.props;
        return (
            <div className='user-container'>
                <Header
                    {...this.props}
                    user={loggedUser}
                    goHome={goHome}
                    onClickLogout={logout} />
                <div className='user-content'>
                    user content
                </div>
            </div>
        )
    }

}

export default User;