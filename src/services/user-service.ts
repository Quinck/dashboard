import registeredUsersData from '../api/mocked-data/mocked-registered-users'
import activeUsersData from '../api/mocked-data/mocked-registered-users'
import { UserType } from '../models/user'

export class UserService {
    
    async getRegisteredUsers(): Promise<UserType[]>{
        return new Promise<UserType[]>((resolve)=>{
            setTimeout(() => resolve(registeredUsersData.users), 2000)
        });
    }

    async getActiveUsers(): Promise<UserType[]> {
        return new Promise<UserType[]>((resolve) => {
            setTimeout(() => resolve(activeUsersData.users), 2000)
        });
    }
}
