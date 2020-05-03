export enum GenderType {
    Male,
    Female,
    Others
}

export enum UserFilterType {
    AGE,
    SEX
}

export interface UserType {
    userId: string,
    age: number,
    sex: GenderType | string,
}

export interface FilteredUsersGroup {
    selectedFiltersLabels: string[],
    users: UserType[]
}