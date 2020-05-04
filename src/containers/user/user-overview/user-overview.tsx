import * as React from 'react';
import './user-overview.css';
import UserProfleCard from '../../../components/user-components/user-profile-card/user-profile-card';
import UserHistoryCard from '../../../components/user-components/user-history-card/user-history-card';
import { UserCompleteType } from '../../../models/user';

export interface UserOverview {
    user: UserCompleteType;
}

const UserOverview = (props: UserOverview) => {
    const { user } = props;
    return (
        <div className='user-overview-container'>
            <div className='user-overview-content'>
                <div className='user-overview-title'>
                    USER: {user.userInfo.userId}
                </div>
                <div>user profile</div>
                <UserProfleCard 
                    user={
                        {
                            userId: user.userInfo.userId,
                            age: user.userInfo.age,
                            sex: user.userInfo.sex
                        }
                    }
                />
                <div>history</div>
                <div className='user-history-container'>
                    {user.usageSummary.length > 0 &&
                        user.usageSummary.map((summary, key) =>
                            <UserHistoryCard
                                key={key}
                                usageSummary={
                                    {
                                        stationId: summary.stationId,
                                        startDate: summary.startDate,
                                        startPosition: summary.startPosition,
                                        endDate: summary.endDate,
                                        endPosition: summary.endPosition
                                    }
                                }
                            />
                        )
                    }
                    {
                        user.usageSummary.length === 0 &&
                        <div className='no-usage-text'>
                            no usage for the current user
                    </div>
                    }
                </div>
            </div>
        </div>
    );
}


export default UserOverview; 