
export enum UserFilterType {
    AGE,
    SEX
}

export interface UsageSummary {
    startDate: Date,
    endDate?: Date,
    startPosition: string,
    endPosition?: string,
    stationId: string
}

export interface UserType {
    userId: string,
    age: number,
    sex: string,
}

export interface UserCompleteType {
    userInfo: UserType,
    usageSummary: UsageSummary[]
}

export interface FilteredUsersGroup {
    selectedFiltersLabels: string[],
    users: UserType[]
}