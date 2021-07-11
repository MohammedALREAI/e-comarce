import { Action } from 'redux'
import { User } from './shapeState.interface'


export enum EnumAuthAction {


     // HANDLE WITH SUIGNUP
     USER_SIGHUP_SUCCESS = 'USER_SIGHUP_SUCCESS',
     USER_SIGHUP_START = 'USER_SIGHUP_START',
     USER_SIGHUP_FILL = 'USER_SIGHUP_FILL',
     // HANDLE WITH LOGIN


     USER_LOGIN_START = 'USER_LOGIN_START',
     USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
     USER_LOGIN_FILL = 'USER_LOGIN_FILL',


     USER_LOGOUT = 'USER_LOGOUT'

}























export interface SignupActionStart extends Action<string> {
     type: EnumAuthAction.USER_SIGHUP_START;

}

export interface SignupActionSuccess extends Action<string> {
     type: EnumAuthAction.USER_SIGHUP_SUCCESS;
     payload: { user: User }

}
export interface SignupActionFill extends Action<string> {
     type: EnumAuthAction.USER_SIGHUP_FILL;
     payload: {
          error: string
     }

}



export type TSignupAction = SignupActionSuccess | SignupActionFill | SignupActionStart


/**;loagin action s */

export interface LoginActionSuccess extends Action<string> {
     type: EnumAuthAction.USER_LOGIN_SUCCESS;
     payload: {
          user: User
     }

}
export interface LoginActionStart extends Action<string> {
     type: EnumAuthAction.USER_LOGIN_START;

}
export interface LoginActionFill extends Action<string> {
     type: EnumAuthAction.USER_LOGIN_FILL;
     payload: {
          error: string
     }
}


export type TLoginAction = LoginActionSuccess | LoginActionStart | LoginActionFill;


/**
 * logout no need te dat payload
 */
export interface TLogoutAction extends Action<string> {
     type: EnumAuthAction.USER_LOGOUT;
}




export type ActionAuth = TLoginAction | TSignupAction | TLogoutAction
