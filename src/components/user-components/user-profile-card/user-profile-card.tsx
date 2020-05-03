import * as React from 'react';
import './user-profile-card.css';
import { GenderType } from '../../../models/user'

export interface UserProfleCardProps {
    age: number;
    sex: GenderType;
}


const UserProfleCard = (props: UserProfleCardProps) => {
    const { age, sex } = props;

    function sexParser (sex: GenderType): string {
        if (sex === GenderType.Male)
            return 'Male'
        if (sex === GenderType.Female)
            return 'Female'
        return 'Other';
    }

    return (
        <div className={sex === GenderType.Male ? 'user-profile-card-container male' : 'user-profile-card-container female'}>
            <div className='user-profile-card-content'>
                <div> age: {age} </div>
                <div> sex: {sexParser(sex)} </div>
            </div>
        </div>
    );
}


export default UserProfleCard; 