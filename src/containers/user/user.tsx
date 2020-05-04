import * as React from 'react'
import './user.css';
import { FilteredUsersGroup, UserCompleteType} from '../../models/user'
import UserTab from '../../components/user-components/user-tab/user-tab'
import { UserFilterType } from '../../models/user'
import SeparatorFilteredGroup from '../../components/separator-filtered-group/separator-filtered-group';
import { FullscreenModal } from '../../components/fullscreen-modal/fullscreen-modal';
import UserOverview from './user-overview/user-overview'
interface UserProps {
    filtersGroups: FilteredUsersGroup[],
    selectedFilters: UserFilterType[],
    onUserFilterSelected: (selectedFilter: UserFilterType) => void,
    showModal: boolean,
    selectedUser?: UserCompleteType;
    onCloseModal: () => void;
    onSelectedUser: (userId: string) => void;
    activeUser: boolean;
}

class User extends React.Component<UserProps>{

    public render() {

        const { activeUser, filtersGroups, selectedFilters, onUserFilterSelected, showModal, selectedUser, onCloseModal, onSelectedUser } = this.props;

        return (
            <div className='user-container'>
                {!showModal && 
                    <div className='user-content'>
                    <div className='users-title'>{activeUser ? 'Active Users' : 'Registered Users' }</div>
                        <div className='users-filters-container'>
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
                                        onSelectedUser={(user) => onSelectedUser(user)}
                                    />  
                                )}
                            </div> 
                        )}
                    </div>
                }   
                {selectedUser&&
                    <FullscreenModal
                        onClose={onCloseModal}
                        show={showModal}
                        content={<UserOverview user={selectedUser }/>}
                     />
                }
            </div>
        )
    }

}

export default User;