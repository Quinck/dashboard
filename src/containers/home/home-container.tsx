import * as React from 'react'
import Home from './home';
import BasePage from '../base-page/base-page'

import { UserService } from '../../services/user-service';
import { UserType } from '../../models/user';

interface HomeContainerState {
    activeUsers: UserType[];
    registeredUsers: UserType[];
    donutActiveUserSelected: boolean;
}



class HomeContainer extends React.Component<{}, HomeContainerState>{

    userService: UserService = new UserService();

    constructor(props: any) {
        super(props);
        this.state = {
            activeUsers: [],
            registeredUsers: [],
            donutActiveUserSelected: true
        }
    }

    componentDidMount(){
        this.userService.getRegisteredUsers().then((registeredUsers)=>{
            this.setState({registeredUsers}, ()=>{
                this.userService.getActiveUsers().then((activeUsers) => {
                    this.setState({ activeUsers });
                })
            });
        })
    }

    donutToggle = () => {
        this.setState({ donutActiveUserSelected: !this.state.donutActiveUserSelected });
    }
    
    public render(){

        const donutSeries = [64, 36];
        const donutOptions = {
            chart: {
                type: 'donut',
              },
            stroke: {
                width: 0,
            },
            fill: {
                colors: ['#2F5597', '#B4C7E7'],
                opacity: 1,
                type: 'solid',
            },
            dataLabels: {
                enabled: false,
            }
        };

        const barSeries= [{
            name: 'Male',
            data: [44, 55, 41, 37, 22, 43, 21]
        }, {
            name: 'Female',
            data: [53, 32, 33, 52, 13, 43, 32]
        }];
        const barOptions= {
            chart: {
                type: 'bar',
                    height: 300,
                        stacked: true,
              },
            plotOptions: {
                bar: {
                    horizontal: false,
                },
            },
            stroke: {
                width: 0,
            },
            xaxis: {
                categories: ['18-24', '25-32', '33-44', '45-60', '61-70', '71-80', '81-100'],
                   
            },
            yaxis: {
                title: {
                    text: undefined
                },
                show: false
            },
            fill: {
                colors: ['#2F5597', '#B4C7E7'],
                opacity: 1,
                type: 'solid',
            },
            legend: {
                position: 'top',
                    horizontalAlign: 'left',
                        offsetX: 40
            },
            dataLabels: {
                enabled: false,
            }
        };


        return(
            <BasePage
                    component={
                    <Home
                        {...this.state}
                        donutSeries={donutSeries}
                        donutOptions={donutOptions}
                        barSeries={barSeries}
                        barOptions={barOptions}
                        donutToggle={this.donutToggle}
                        />
                    }
            /> 
        )
    }

}

export default HomeContainer;