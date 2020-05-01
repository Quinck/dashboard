import * as React from 'react'

interface UserContainerProps {
    state?: string;
}

interface UserContainerState {
    prop?: string;
}

class UserContainer extends React.Component<UserContainerProps, UserContainerState>{

    public render(){
        return(
            <div>User Container</div>
        )
    }

}

export default UserContainer;