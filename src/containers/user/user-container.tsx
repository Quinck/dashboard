import * as React from 'react'
import User from './user';
import BasePage from '../base-page/base-page'

class UserContainer extends React.Component<{}, {}>{

    public render() {
        return (
            <BasePage
                component={
                    <User/>
                }
            /> 
        )
    }

}

export default UserContainer;