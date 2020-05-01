import * as React from 'react'

interface StationContainerProps {
    state?: string;
}

interface StationContainerState {
    prop?: string;
}

class StationContainer extends React.Component<StationContainerProps, StationContainerState>{

    public render(){
        return(
            <div>Station Container</div>
        )
    }

}

export default StationContainer;