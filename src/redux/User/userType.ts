import { Action } from 'redux'
import { User } from './shapeState.interface'


export enum EnumUserAction{


    // HANDLE WITH SUIGNUP
USER_SIGHUP_SUCCESS = 'USER_SIGHUP_SUCCESS',
USER_SIGHUP_START = 'USER_SIGHUP_START',
USER_SIGHUP_FILL = 'USER_SIGHUP_FILL',
    // HANDLE WITH LOGIN


USER_LOGIN_START = 'USER_LOGIN_START',
USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
USER_LOGIN_FILL = 'USER_LOGIN_FILL',


GET_PROFILE_START = 'GET_PROFILE_START',
GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS',
GET_PROFILE_FILL = 'GET_PROFILE_FILL',

UPDATE_PROFILE_START = 'UPDATE_PROFILE_START',
UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS',
UPDATE_PROFILE_FILL = 'UPDATE_PROFILE_FILL',



// HANDLE WITH LOGOUT
USER_LOGOUT = 'USER_LOGOUT'

}


export interface LoginData{
    email:string,
    password:string
}




export interface SighupData extends LoginData{
    name:string;
}




/**
 * handle with singup all the statuse
 *  error loading and succrss
 *
 */


/**
 *  getProfileSuccess
 */


export interface getProfileSuccess extends Action<string> {
    type: EnumUserAction.GET_PROFILE_SUCCESS;
    payload:User

}

export interface getProfileStart extends Action<string> {
    type: EnumUserAction.GET_PROFILE_START;

}

export interface getProfileFill extends Action<string> {
    type: EnumUserAction.GET_PROFILE_FILL;
    payload:string

}



/**
 * UPDATE_PROFILE
 */


 export interface updateProfileFill extends Action<string> {
    type: EnumUserAction.UPDATE_PROFILE_FILL;
    payload:string

}
 export interface updateProfileSuccess extends Action<string> {
    type: EnumUserAction.UPDATE_PROFILE_SUCCESS;
    payload:User

}
 export interface updateProfileStart extends Action<string> {
    type: EnumUserAction.UPDATE_PROFILE_START;

}











export interface SignupActionSuccess extends Action<string> {
    type: EnumUserAction.USER_SIGHUP_SUCCESS;
    payload:User

}
export interface SignupActionFill extends Action<string> {
    type: EnumUserAction.USER_SIGHUP_FILL;
    payload:string

}
export interface SignupActionStart extends Action<string> {
    type: EnumUserAction.USER_SIGHUP_START;

}


 /**
  *  ALL TYPE OF ACCION SFOR TTHE SUNGIN UP
  */

 export type SignupAction = SignupActionSuccess | SignupActionFill | SignupActionStart


// hint the user login need data with the logout no need data


export type ProfileAction = getProfileSuccess | getProfileStart | getProfileFill | updateProfileFill | updateProfileSuccess | updateProfileStart;




 /**
  *     ALL TYPE OF ACCION  TTHE LOGIN  UP
  */
export interface LoginActionSuccess extends Action<string> {
    type: EnumUserAction.USER_LOGIN_SUCCESS;
    payload:User

}
export interface LoginActionStart extends Action<string> {
    type: EnumUserAction.USER_LOGIN_START;

}
export interface LoginActionFill extends Action<string> {
    type: EnumUserAction.USER_LOGIN_FILL;
    payload:string
}


     export type LoginAction = LoginActionSuccess | LoginActionStart | LoginActionFill;


/**
 * logout no need te dat payload
 */
export interface LogoutAction extends Action<string> {
    type: EnumUserAction.USER_LOGOUT;
}








export type ActionUser = LoginAction | SignupAction | LogoutAction | ProfileAction


// export type UserAction_All = UserActions[keyof UserActions];
