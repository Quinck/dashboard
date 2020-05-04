import * as React from 'react';
import './user-profile-card.css';
import { UserType } from '../../../models/user'

export interface UserProfleCardProps {
    user: UserType;
}


const UserProfleCard = (props: UserProfleCardProps) => {
    const { user } = props;

    return (
        <div className={user.sex === 'M' ? 'user-profile-card-container male' : 'user-profile-card-container female'}>
            <div className='user-profile-card-content'>
                <div> age: {user.age} </div>
                <div> sex: {user.sex} </div>
            </div>
        </div>
    );
}


export default UserProfleCard; 