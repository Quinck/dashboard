import * as React from 'react'
import User from './user'
interface UserContainerProps {
    state?: string;
}

interface UserContainerState {
    prop?: string;
}

class UserContainer extends React.Component<UserContainerProps, UserContainerState>{

    public render(){
        return(
            <User/>
        )
    }

}

export default UserContainer;