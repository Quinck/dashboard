import * as React from 'react';
import './user-tab.css';

export interface UserTabProps {
    userId: string;
    onSelectedUser: (userId: string) => void;
}

const UserTab = (props: UserTabProps) => {
    const { userId, onSelectedUser } = props;
    return (
        <div className='user-tab-container' onClick={() => onSelectedUser(userId)}>
            <div className='user-tab-content'>
                {userId}
            </div>
        </div>
    );
}


export default UserTab; 