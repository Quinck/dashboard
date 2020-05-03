import * as React from 'react'
import User from './user';
import BasePage from '../base-page/base-page'
import usersData from '../../api/mocked-data/mocked-registered-users'
import { UserType } from '../../models/user'
import { FilteredUsersGroup } from '../../models/user'
import {UserFilterType} from '../../models/user'

export interface UserContainerState{
    selectedFilters: UserFilterType[];
    filtersGroups: FilteredUsersGroup[];
}  

class UserContainer extends React.Component<{}, UserContainerState>{

    constructor(props: any){
        super(props);
        this.state={
            selectedFilters: [] ,
            filtersGroups: []
        }
    }

    componentDidMount(){
        this.generatesFiltersGroups();
    }

    handleFilterSelected = (filter: UserFilterType) =>{
        let selectedFilters = this.state.selectedFilters;
        if (this.state.selectedFilters.includes(filter)){
            selectedFilters.splice(selectedFilters.indexOf(filter), 1);
        }
        else{
            selectedFilters.push(filter);
        }
        this.setState({
            selectedFilters: selectedFilters
        }, this.generatesFiltersGroups);
    }

    getUsersWithGender = (users: UserType[], gender:string) : UserType[] => {
        return users.filter((user: UserType) => user.sex === gender);
    }

    getUsersWithAge = (users: UserType[], age: number): UserType[] => {
        return users.filter((user: UserType) => user.age >= age && user.age <= age + 5);
    }

    generatesFiltersGroups = () => {
        const {selectedFilters} = this.state;
        if (selectedFilters.length === 0){
            this.setState({
                filtersGroups: [{
                    selectedFiltersLabels:[],
                    users: usersData.users
                }]
            })
        } 
        // one filter selected case
        if(this.state.selectedFilters.length === 1) {
            if(this.state.selectedFilters[0] === UserFilterType.SEX){
                const newGroups = [];
                const males: FilteredUsersGroup = {
                    selectedFiltersLabels: ['SEX: MALE'],
                    users: this.getUsersWithGender(usersData.users,'M')
                };
                const females: FilteredUsersGroup = {
                    selectedFiltersLabels: ['SEX: FEMALE'],
                    users: this.getUsersWithGender(usersData.users, 'F')
                };
                newGroups.push(males);
                newGroups.push(females);
                this.setState({
                    filtersGroups: newGroups
                });
            }
            if (this.state.selectedFilters[0] === UserFilterType.AGE) {
                const newGroups = [];
                let maxAge = 0;
                let minAge = 200;
                usersData.users.forEach((user)=>{
                    if(user.age > maxAge)
                        maxAge = user.age;
                    if (user.age < minAge)
                        minAge = user.age;
                });
               
                for(let i = minAge; i<maxAge; i=i+6){
                    const finalAge = i+5;
                    const ageElement: FilteredUsersGroup = {
                        selectedFiltersLabels: ['AGE: ' + i + '-' + finalAge],
                        users: this.getUsersWithAge(usersData.users, i)
                    };
                    newGroups.push(ageElement);
                }
                this.setState({
                    filtersGroups: newGroups
                }); 
            }
        }
        // both filters selected case
        if (this.state.selectedFilters.length === 2) {
            
        }

    }

    public render() {
        return (
            <BasePage
                component={
                    <User 
                        {...this.state}
                        onUserFilterSelected={this.handleFilterSelected}/>
                }
            /> 
        )
    }

}

export default UserContainer;