import * as React from 'react'
import './station.css';
import Header from '../../components/header/header';

interface StationProps {
    prop?: string;
}

class Station extends React.Component<StationProps>{

    public render() {
        return (
            <div className='station-container'>
                <div className='station-content'>
                    station content
                </div>
            </div>
        )
    }

}

export default Station;