import * as React from 'react'
import Home from './home';
import BasePage from '../base-page/base-page'

import { UserService } from '../../services/user-service';
import { UserType } from '../../models/user';

interface HomeContainerState {
    loadingData: boolean;
    activeUsers: UserType[];
    registeredUsers: UserType[];
    donutActiveUserSelected: boolean;
    donutMaleActive: number;
    donutFemaleActive: number;
    donutMaleRegistered: number;
    donutFemaleRegistered: number;
    donutMalePercentageActive: number;
    donutFemalePercentageActive: number;
    donutMalePercentageRegistered: number;
    donutFemalePercentageRegistered: number;
}




class HomeContainer extends React.Component<{}, HomeContainerState>{

    userService: UserService = new UserService();

    constructor(props: any) {
        super(props);
        this.state = {
            loadingData:false,
            activeUsers: [],
            registeredUsers: [],
            donutActiveUserSelected: true,
            donutMaleActive: 1,
            donutFemaleActive: 1,
            donutMaleRegistered: 1,
            donutFemaleRegistered: 1,
            donutMalePercentageActive: 50,
            donutFemalePercentageActive: 50,
            donutMalePercentageRegistered: 50,
            donutFemalePercentageRegistered: 50
        }
    }

    componentDidMount(){
        this.setState({
            loadingData: true,
        }, () => {
            this.userService.getRegisteredUsers().then((registeredUsers) => {
                this.setState({ registeredUsers }, () => {
                    this.userService.getActiveUsers().then((activeUsers) => {
                        this.setState({ activeUsers, loadingData: false });
                        this.retrieveMaleFemaleDonut();
                    })
                });
            })
        });
        
    }

    donutToggle = () => {
        this.setState({ donutActiveUserSelected: !this.state.donutActiveUserSelected });
    }
    
    retrieveMaleFemaleDonut = () => {     
        const donutMaleActive = this.state.activeUsers.filter((user) => user.sex === 'M').length;
        console.log('donutMaleActive: ', donutMaleActive);
        const donutFemaleActive = this.state.activeUsers.filter((user) => user.sex === 'F').length;
        const donutMaleRegistered = this.state.registeredUsers.filter((user) => user.sex === 'M').length;
        const donutFemaleRegistered = this.state.registeredUsers.filter((user) => user.sex === 'F').length;

        this.setState({
            donutMaleActive,
            donutFemaleActive,
            donutMaleRegistered,
            donutFemaleRegistered,
            donutMalePercentageActive: Math.round(donutMaleActive * 100 / (donutMaleActive + donutFemaleActive)),
            donutFemalePercentageActive: Math.round(donutFemaleActive * 100 / (donutMaleActive + donutFemaleActive)),
            donutMalePercentageRegistered: Math.round(donutMaleRegistered * 100 / (donutMaleRegistered + donutFemaleRegistered)),
            donutFemalePercentageRegistered: Math.round(donutFemaleRegistered * 100 / (donutMaleRegistered + donutFemaleRegistered))
        });
            
    }

    public render(){

        const donutSeries = this.state.donutActiveUserSelected ? 
            [this.state.donutMaleActive, this.state.donutFemaleActive] : 
            [this.state.donutMaleRegistered, this.state.donutFemaleRegistered] ;
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
                    loadingData={this.state.loadingData}
                loadingMessage={'Please wait a few seconds'}
            /> 
        )
    }

}

export default HomeContainer;