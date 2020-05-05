import * as React from 'react'
import './navigation-bar.css';
import HomeCard from '../../components/home-card/home-card';
import userRegisteredIcon from '../../assets/user-registered-icon.svg';
import stationIcon from '../../assets/station-icon.svg';
import activeUserIcon from '../../assets/active-user-icon.svg';
import logoutIcon from '../../assets/logout-icon.svg';
import dashboardIcon from '../../assets/dashboard-icon.svg';

interface NavigationBarProps {
    goToRegisteredUser: () => void;
    goToActiveUser: () => void;
    goToStation: () => void;
    goToDashboard: () => void;
    logout: () => void;
}

class NavigationBar extends React.Component<NavigationBarProps>{

    public render() {
        const { goToActiveUser, goToRegisteredUser, goToStation, goToDashboard, logout } = this.props;
        return (
            <div className='navigation-bar-container'>
                <div className='navigation-bar-content'>
                    <HomeCard
                        icon={dashboardIcon}
                        topic={'Dashboard'}
                        action={goToDashboard}
                    />
                    <HomeCard
                        icon={activeUserIcon}
                        topic={'Active users'}
                        action={goToActiveUser}
                    />
                    <HomeCard
                        icon={userRegisteredIcon}
                        topic={'Users registered'}
                        action={goToRegisteredUser}
                    />
                    <HomeCard
                        icon={stationIcon}
                        topic={'Station'}
                        action={goToStation}
                    />
                    <HomeCard
                        icon={logoutIcon}
                        topic={'Logout'}
                        action={logout}
                    />
                </div>
            </div>
        )
    }

}

export default NavigationBar;