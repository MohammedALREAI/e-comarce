

export interface User {
     _id: string,
     name: string
     email: string
     token: string,
}


export default interface IAuthState {
     isLoading?: boolean,
     error?: string,
     success?: boolean,
     user: User | any,
}
