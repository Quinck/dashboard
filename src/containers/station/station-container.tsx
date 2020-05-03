import * as React from 'react'
import Station from './station';
import BasePage from '../base-page/base-page'

class StationContainer extends React.Component<{}, {}>{

    public render() {
        return (
            <BasePage
                component={
                    <Station/>
                }
            /> 
        )
    }

}

export default StationContainer;