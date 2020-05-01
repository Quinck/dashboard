import * as React from 'react'
import './station.css';

interface StationProps {
    state?: string;
}

interface StationState {
    prop?: string;
}

class Station extends React.Component<StationProps, StationState>{

    public render() {
        return (
            <div>Station</div>
        )
    }

}

export default Station;