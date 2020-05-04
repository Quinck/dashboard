import * as React from 'react'
import Home from './home';
import BasePage from '../base-page/base-page'

class HomeContainer extends React.Component<{}, {}>{

    goToRegisteredUser(){
        window.location.href = ('/user');
    }
    goToActiveUser() {
        window.location.href = ('/user?active=true');
    }
    goToStation() {
        window.location.href = ('/station');
    }

    public render(){

        return(
            <BasePage
                    component={
                    <Home
                        {...this.state}
                        goToRegisteredUser={this.goToRegisteredUser}
                        goToActiveUser={this.goToActiveUser}
                        goToStation={this.goToStation} />
                    }
            /> 
        )
    }

}

export default HomeContainer;