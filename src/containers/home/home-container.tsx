import * as React from 'react'
import Home from './home';
import BasePage from '../base-page/base-page'

class HomeContainer extends React.Component<{}, {}>{

    public render(){

        return(
            <BasePage
                    component={
                    <Home
                        content={'Home Charts'}
                        />
                    }
            /> 
        )
    }

}

export default HomeContainer;