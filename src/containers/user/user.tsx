import * as React from 'react'
import './user.css';
import { FilteredUsersGroup} from '../../models/user'
import UserTab from '../../components/user-components/user-tab/user-tab'
import { UserFilterType } from '../../models/user'
import SeparatorFilteredGroup from '../../components/separator-filtered-group/separator-filtered-group';
import LoadingModal from '../../components/loading-modal/loading-modal';

interface UserProps {
    filtersGroups: FilteredUsersGroup[],
    selectedFilters: UserFilterType[],
    onUserFilterSelected: (selectedFilter: UserFilterType) => void
}

class User extends React.Component<UserProps>{

    public render() {

        const { filtersGroups, selectedFilters, onUserFilterSelected} = this.props;

        return (
            <div className='user-container'>
                <div className='user-content'>
                    <div className='registered-users-title'>Registered Users</div>
                    <div className='registered-users-filters-container'>
                        <div>
                            Group By:
                        </div>
                        <div className={selectedFilters.includes(UserFilterType.AGE) ? 'filter-box selected-filter' : 'filter-box' } 
                            onClick={() => onUserFilterSelected(UserFilterType.AGE)}>
                            Age
                        </div>
                        <div className={selectedFilters.includes(UserFilterType.SEX) ? 'filter-box selected-filter' : 'filter-box'} 
                            onClick={() => onUserFilterSelected(UserFilterType.SEX)}>
                            Sex
                        </div>
                    </div>

                    {filtersGroups.map((filteredUsersGroup, i) => 
                        <div className='users-tabs-content' key={i}>
                            {
                                filteredUsersGroup.selectedFiltersLabels.length === 0 &&
                                <SeparatorFilteredGroup
                                />
                            }
                            {
                            filteredUsersGroup.selectedFiltersLabels.length === 1 &&
                                <SeparatorFilteredGroup
                                    leftFilter={filteredUsersGroup.selectedFiltersLabels[0]}
                                />
                            }
                            {
                                filteredUsersGroup.selectedFiltersLabels.length === 2 &&
                                <SeparatorFilteredGroup
                                    leftFilter={filteredUsersGroup.selectedFiltersLabels[0]}
                                    rightFilter={filteredUsersGroup.selectedFiltersLabels[1]}
                                />
                            }
                            {filteredUsersGroup.users.map((user, key)=>
                                <UserTab
                                    key={key}
                                    userId={user.userId}
                                    onSelectedUser={(user) => console.log('user: ', user)}
                                />  
                            )}
                        </div> 
                    )}
                    <div className='padding-bottom'/>
                </div>
            </div>
        )
    }

}

export default User;