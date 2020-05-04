import usersData from '../api/mocked-data/mocked-registered-users'
import { UserType } from '../models/user'

export class UserService {
    
    async getRegisteredUsers(): Promise<UserType[]>{
        return new Promise<UserType[]>((resolve)=>{
            setTimeout(() => resolve(usersData.users),2000)
        });
    }
}
