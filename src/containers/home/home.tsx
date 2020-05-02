import * as React from 'react'
import './home.css';
import Header  from '../../components/header/header';
import HomeCard from '../../components/home-card/home-card';

interface HomeProps {
    logoutVisible: boolean;
    loggedUser: string;
    handleClickOutside: () => void;
    handleShowLogout: () => void;
    goHome: () => void; 
    logout: () => void;
    goToUser: () => void;
    goToStation: () => void;
}

class Home extends React.Component<HomeProps>{

    public render() {
        const { loggedUser, goHome, logout, goToUser, goToStation } = this.props;
        return (
            <div className='home-container'>
                <Header
                    {...this.props}
                    user={loggedUser}
                    goHome={goHome}
                    onClickLogout={logout}/>
                <div className='home-content'>
                    <HomeCard
                        element={{
                            name:'registered users',
                            quantity: 340,
                         }
                        }
                        goToPage={goToUser}
                    />
                    <HomeCard
                        element={{
                            name: 'active users',
                            quantity: 14,
                        }}
                        goToPage={goToUser}
                    />
                    <HomeCard
                        element={{
                            name: 'stations',
                            quantity: 21,
                        }}
                        goToPage={goToStation}
                    />
                </div>
            </div>
        )
    }

}

export default Home;