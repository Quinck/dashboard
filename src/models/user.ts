export enum GenderType {
    Male,
    Female,
    Others
}

export interface User {
    userId: string,
    age: number,
    sex: GenderType,
}