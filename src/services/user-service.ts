import registeredUsersData from '../api/mocked-data/mocked-registered-users'
import activeUsersData from '../api/mocked-data/mocked-active-users'
import mockedUsersDB from '../api/mocked-data/mocked-users-db'
import { UserType, UserCompleteType } from '../models/user'

export class UserService {
    
    async getRegisteredUsers(): Promise<UserType[]>{
        return new Promise<UserType[]>((resolve)=>{
            setTimeout(() => resolve(registeredUsersData.users), 0)
        });
    }

    async getActiveUsers(): Promise<UserType[]> {
        return new Promise<UserType[]>((resolve) => {
            setTimeout(() => resolve(activeUsersData.users), 0)
        });
    }

    async getCompleteUserInfo(userId: string): Promise<UserCompleteType> {
        return new Promise<UserCompleteType>((resolve) => {
            setTimeout(() => resolve(mockedUsersDB.users.find((user) => user.userInfo.userId === userId)), 0)
        });
    }
}
