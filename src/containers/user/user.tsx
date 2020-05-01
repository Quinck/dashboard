import * as React from 'react'
import './user.css';


interface UserProps {
    state?: string;
}

interface UserState {
    prop?: string;
}

class User extends React.Component<UserProps, UserState>{

    public render() {
        return (
            <div>User</div>
        )
    }

}

export default User;