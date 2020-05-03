import * as React from 'react'
import './user.css';
import UserHistoryCard from '../../components/user-components/user-history-card/user-history-card';

interface UserProps {
    prop?:string
}

class User extends React.Component<UserProps>{

    public render() {
        return (
            <div className='user-container'>
                <div className='user-content'>
                    user
                </div>
            </div>
        )
    }

}

export default User;