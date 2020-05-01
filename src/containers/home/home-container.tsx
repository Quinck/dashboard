import * as React from 'react'
import Home from './home';

interface HomeContainerProps {
    state?: string;
}

interface HomeContainerState {
    prop?: string;
}

class HomeContainer extends React.Component<HomeContainerProps, HomeContainerState>{

    public render(){
        return(
            <Home/>
        )
    }

}

export default HomeContainer;