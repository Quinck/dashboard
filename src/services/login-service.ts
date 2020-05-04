import authorizedUsers from '../api/mocked-data/authorized-users'

export class LoginService {

    async validateLoginData(username: string, password: string): Promise<string> {
        return new Promise <string>((resolve, rejects) => {
            setTimeout(() => {
                const found = authorizedUsers.authorizedUsers.find( user => user.username === username && user.password === password);
                if (found){
                    resolve(found.displayedName)
                } else {
                    rejects();
                }
            }, 500)
        });
    }

}
