import * as React from 'react'

interface HomeContainerProps {
    state?: string;
}

interface HomeContainerState {
    prop?: string;
}

class HomeContainer extends React.Component<HomeContainerProps, HomeContainerState>{

    public render(){
        return(
            <div>Home Container</div>
        )
    }

}

export default HomeContainer;