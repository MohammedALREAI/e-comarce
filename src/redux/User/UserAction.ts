import { UserTypeAction } from './userTypeAction'


export interface IUserState{
  user:{

    _id: string,
    name: string
    email: string
    token: string}
}


 export type UserAction = {
    type: string
    user: IUserState
  }





export const loginSuccess = (userData:IUserState):UserAction => {
  return {
    type: UserTypeAction.USER_LOGIN_SUCCESS,
    user: userData,
  }
}
