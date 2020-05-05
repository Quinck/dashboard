import * as React from 'react';
import './header.css';
import logo from '../../assets/logo.png'
import userIcon from '../../assets/user-icon.svg'

export interface HeaderProps {
    user: string;
}



    const Header = (props: HeaderProps) => {
        const { user } = props;
        return (
                <>
                    <div className='header-container' >
                        <div className='logo-container'>
                            <img className="header-logo" src={logo} alt="Logo" />
                            <div className="header-title">Quinck</div>
                        </div>
                        <div className='user-area'>
                            <div className='logged-username'>
                                <div>logged in as Umberto</div>
                                <div>{user}</div>
                            </div>
                        <div>
                            <div className="header-user-icon-container">
                                <img className="header-user-icon" src={userIcon} alt="UserIcon"/>
                            </div>
                            </div>
                        </div>
                    </div>
                </>
        );
    }


export default Header; 