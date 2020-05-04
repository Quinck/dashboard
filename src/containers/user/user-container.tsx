import * as React from 'react'
import User from './user';
import BasePage from '../base-page/base-page'
import { UserType } from '../../models/user'
import { FilteredUsersGroup } from '../../models/user'
import {UserFilterType} from '../../models/user'
import { UserService } from '../../services/user-service';

export interface UserContainerState{
    selectedFilters: UserFilterType[];
    filtersGroups: FilteredUsersGroup[];
    registeredUsers: UserType[];
    loadingData: boolean;
}  

class UserContainer extends React.Component<{}, UserContainerState>{
    userService : UserService = new UserService();
    constructor(props: any){
        super(props);
        this.state={
            selectedFilters: [] ,
            filtersGroups: [],
            registeredUsers: [],
            loadingData: true,
        }
    }

    componentDidMount(){
        this.userService.getRegisteredUsers()
            .then(users => this.setState({ registeredUsers: users, loadingData:false }, 
                this.generatesFiltersGroups));
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
        const {selectedFilters, registeredUsers} = this.state;
        const newGroups = [];
        let maxAge = 0;
        let minAge = 200;
        registeredUsers.forEach((user) => {
            if (user.age > maxAge)
                maxAge = user.age;
            if (user.age < minAge)
                minAge = user.age;
        });
        if (selectedFilters.length === 0){
            this.setState({
                filtersGroups: [{
                    selectedFiltersLabels:[],
                    users: registeredUsers
                }]
            })
        } 
        // one filter selected case
        if(this.state.selectedFilters.length === 1) {
          
            if(this.state.selectedFilters[0] === UserFilterType.SEX){
                
                const males: FilteredUsersGroup = {
                    selectedFiltersLabels: ['SEX: MALE'],
                    users: this.getUsersWithGender(registeredUsers,'M')
                };
                const females: FilteredUsersGroup = {
                    selectedFiltersLabels: ['SEX: FEMALE'],
                    users: this.getUsersWithGender(registeredUsers, 'F')
                };
                newGroups.push(males);
                newGroups.push(females);
                this.setState({
                    filtersGroups: newGroups
                });
            }
            if (this.state.selectedFilters[0] === UserFilterType.AGE) {
                for(let i = minAge; i<maxAge; i=i+6){
                    const finalAge = i+5;
                    const ageElement: FilteredUsersGroup = {
                        selectedFiltersLabels: ['AGE: ' + i + '-' + finalAge],
                        users: this.getUsersWithAge(registeredUsers, i)
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

            for (let i = minAge; i < maxAge; i = i + 6) {
                const finalAge = i + 5;
                const ageMaleElement: FilteredUsersGroup = {
                    selectedFiltersLabels: ['AGE: ' + i + '-' + finalAge, 'SEX: MALE'],
                    users: this.getUsersWithGender(this.getUsersWithAge(registeredUsers, i),'M')
                };
                const ageFemaleElement: FilteredUsersGroup = {
                    selectedFiltersLabels: ['AGE: ' + i + '-' + finalAge, 'SEX: FEMALE'],
                    users: this.getUsersWithGender(this.getUsersWithAge(registeredUsers, i), 'F')
                };
                newGroups.push(ageMaleElement);
                newGroups.push(ageFemaleElement);
            }
            this.setState({
                filtersGroups: newGroups
            }); 
        }

    }

    public render() {
        return (
            <BasePage
                component={
                    <User 
                        {...this.state}
                        onUserFilterSelected={this.handleFilterSelected} />
                }
                loadingData={this.state.loadingData}
                loadingMessage={'downloading user data, please wait...'}
            /> 
        )
    }

}

export default UserContainer;