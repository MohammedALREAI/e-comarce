

export interface User {
     _id: string,
     name: string
     email: string
     token: string,
}


export default interface IUserState {

     userProfile: {
          user?: User | any,
          isLoading: boolean,
          success: boolean,
          error: string,
     },
}
