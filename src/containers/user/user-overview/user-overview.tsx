import * as React from 'react';
import './user-overview.css';
import UserProfleCard from '../../../components/user-components/user-profile-card/user-profile-card';
import UserHistoryCard from '../../../components/user-components/user-history-card/user-history-card';

export interface UserOverview {
    userData: string;
}

const UserOverview = (props: UserOverview) => {
    const { userData } = props;
    return (
        <div className='user-overview-container'>
            <div className='user-overview-content'>
                <div className='user-overview-title'>
                    USER: {userData}
                </div>
                <div>user profile</div>
                <UserProfleCard 
                    user={
                        {
                            userId: userData,
                            age:22,
                            sex:'M'
                        }
                    }
                />
                <div>history</div>
                <UserHistoryCard 
                    usageSummary = {
                        {
                            stationId: 'StationA',
                            startDate: new Date(),
                            startPosition: 'here',
                            endDate: new Date(),
                            endPosition: 'There'
                        }
                    }
                />
            </div>
        </div>
    );
}


export default UserOverview; 