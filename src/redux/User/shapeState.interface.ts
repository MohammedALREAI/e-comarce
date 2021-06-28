

export interface User{
    _id: string,
      name: string
      email: string
      token: string,
}


export default interface IUserState{
    isLoading?:boolean,
    error?:string,
    success?: boolean,
    user: User,
      userProfile: {
          user?: User,
          isLoading?: boolean,
          success?:boolean,
          error?:string,


        }
        }
