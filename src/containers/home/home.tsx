import * as React from 'react'
import './home.css';
import Chart from "react-apexcharts";

interface HomeProps {
    donutSeries: any;
    donutOptions: any;
    donutActiveUserSelected: boolean;
    donutToggle: () => void;
    barSeries: any;
    barOptions: any
    donutMalePercentageActive: number;
    donutFemalePercentageActive: number;
    donutMalePercentageRegistered: number;
    donutFemalePercentageRegistered: number;
}

class Home extends React.Component<HomeProps>{

    public render() {
        const { donutSeries, donutOptions, donutActiveUserSelected, donutToggle, barSeries, barOptions,
            donutMalePercentageActive, donutFemalePercentageActive, donutMalePercentageRegistered,
            donutFemalePercentageRegistered } = this.props;
        return (
            <div className='home-container'>
                <div className='home-content'> 
                    <div className='top-charts'>
                        <div className='donut-chart-container chart-container'>
                            <div className='donut-data-container'>
                                <div className='header'>
                                    <div className='title'> Users Gender </div>
                                    <div className='data-box' onClick={donutToggle}> 
                                        <div>{donutActiveUserSelected ?'active users' : 'registered users'} </div>
                                    </div>
                                </div>
                                <div className='data-label'>
                                    <div className='female-dot' />
                                    <div className='label-pecentage'>  
                                        <div className='label'>Female</div>
                                        <div className='percentage'>{donutActiveUserSelected ? donutFemalePercentageActive : donutFemalePercentageRegistered }%</div>
                                    </div>
                                </div>
                                <div className='data-label'>
                                    <div className='male-dot' />
                                    <div className='label-pecentage'>
                                        <div className='label'> Male </div>
                                        <div className='percentage'> {donutActiveUserSelected ? donutMalePercentageActive : donutMalePercentageRegistered}% </div>
                                    </div>
                                </div>
                            </div>
                            <div className='donut-chart-content'>
                                <Chart options={donutOptions} series={donutSeries} type="donut" />
                            </div>
                        </div>
                        <div className='bar-chart-container chart-container'>
                            <div className='bar-chart-content'>
                                <Chart options={barOptions} series={barSeries} type="bar" height={250}  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Home;