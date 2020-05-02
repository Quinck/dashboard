export enum GenderType {
    Male,
    Female,
}

export interface User {
    userId: string,
    age: number,
    sex: GenderType,
}