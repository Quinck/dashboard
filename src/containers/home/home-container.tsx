import * as React from 'react'
import Home from './home';
import BasePage from '../base-page/base-page'

class HomeContainer extends React.Component<{}, {}>{

    goToUser(){
        window.location.href = ('/user');
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
                        goToUser={this.goToUser}
                        goToStation={this.goToStation} />
                    }
            /> 
        )
    }

}

export default HomeContainer;