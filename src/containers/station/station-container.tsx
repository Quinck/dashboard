import * as React from 'react'
import Station from "./station";
interface StationContainerProps {
    state?: string;
}

interface StationContainerState {
    prop?: string;
}

class StationContainer extends React.Component<StationContainerProps, StationContainerState>{

    public render(){
        return(
            <Station/>
        )
    }

}

export default StationContainer;