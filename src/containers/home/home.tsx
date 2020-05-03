import * as React from 'react'
import './home.css';
import HomeCard from '../../components/home-card/home-card';

interface HomeProps {
    goToUser: () => void;
    goToStation: () => void;
}

class Home extends React.Component<HomeProps>{

    public render() {
        const { goToUser, goToStation } = this.props;
        return (
            <div className='home-container'>
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