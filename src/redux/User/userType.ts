import { Action } from 'redux'
import { User } from './shapeState.interface'


export enum EnumUserAction {





     /***  GET_PROFILE_START */

     GET_PROFILE_START = 'GET_PROFILE_START',
     GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS',
     GET_PROFILE_FILL = 'GET_PROFILE_FILL',



     /***
      * UPDATE_PROFILE_START
      */
     UPDATE_PROFILE_START = 'UPDATE_PROFILE_START',
     UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS',
     UPDATE_PROFILE_FILL = 'UPDATE_PROFILE_FILL',

}






export interface getProfileSuccess extends Action<string> {
     type: EnumUserAction.GET_PROFILE_SUCCESS;
     payload: { user: User }

}

export interface getProfileStart extends Action<string> {
     type: EnumUserAction.GET_PROFILE_START;

}

export interface getProfileFill extends Action<string> {
     type: EnumUserAction.GET_PROFILE_FILL;
     payload: { error: string }

}

export interface updateProfileFill extends Action<string> {
     type: EnumUserAction.UPDATE_PROFILE_FILL;
     payload: { error: string }

}
export interface updateProfileSuccess extends Action<string> {
     type: EnumUserAction.UPDATE_PROFILE_SUCCESS;
     payload: { user: User }

}
export interface updateProfileStart extends Action<string> {
     type: EnumUserAction.UPDATE_PROFILE_START;

}










export type TGetProfile = getProfileSuccess | getProfileStart | getProfileFill
export type TUpdateProfile = | updateProfileFill | updateProfileSuccess | updateProfileStart;



export type ActionUser = TGetProfile | TUpdateProfile
