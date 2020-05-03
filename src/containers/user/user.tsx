import * as React from 'react'
import './user.css';
import Header from '../../components/header/header';

interface UserProps {
    prop?:string
}

class User extends React.Component<UserProps>{

    public render() {
        return (
            <div className='user-container'>
                <div className='user-content'>
                    user content
                </div>
            </div>
        )
    }

}

export default User;