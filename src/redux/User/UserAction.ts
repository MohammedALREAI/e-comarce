import { schemaValidationSignUpType } from '../../utils/validation'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from 'redux'
import axios, { AxiosError } from 'axios'
import { User } from './shapeState.interface'
import { EnumUserAction, LoginData, ProfileAction, ActionUser } from './userType'
import { TState } from '../Store'

import * as H from 'history'
import { DefinedNumberSchema } from 'yup/lib/number'
const USER_LOGIN_URL = '/users/login'
const USER_SUIGNUP_URL = '/users'
const GET_POFILE_URL = '/users/profile'

/**
 * loginSuccess
 * @param userData
 * @returns  the the  action contaions the data and type
 *
 */
// const loginAction = (userData: LoginData, history: H.History<any>) => {
//      return async (dispatch: any) => {
//           /*** enter the login statrt wich will be convert the loading  to it   */
//           dispatch({
//                type: EnumUserAction.USER_LOGIN_START,
//           })

//           try {
//                const response = await axios.post(USER_LOGIN_URL, userData)
//                console.log(response)
//                localStorage.setItem('user', JSON.stringify(response.data))

//                dispatch({
//                     type: EnumUserAction.USER_LOGIN_SUCCESS,
//                     payload: response.data,
//                })
//                history.push('/')
//           } catch (error) {
//                const err = error as AxiosError
//                if (err.response && err.response.data.message) {
//                     dispatch({
//                          type: EnumUserAction.USER_LOGIN_FILL,
//                          payload: err.response.data.message,
//                     })
//                } else {
//                     throw new Error('An internal error occurred 500')
//                }
//           }
//      }
// }


export const loginAction = (userData: LoginData, history: any) => {
     return async (dispatch: Dispatch<ActionUser>) => {
          /*** enter the login statrt wich will be convert the loading  to it   */
          dispatch({
               type: EnumUserAction.USER_LOGIN_START,
          })

          try {
               const response = await axios.post('/users/login', userData)
               localStorage.setItem('user', JSON.stringify(response.data))

               dispatch({
                    type: EnumUserAction.USER_LOGIN_SUCCESS,
                    payload: {
                         user: response.data,
                    },
               })
               history.push('/profile')
          } catch (e: any) {
               dispatch({
                    type: EnumUserAction.USER_LOGIN_FILL,
                    payload: 'thrre is some erro',
               })
          }
     }
}



/**
 * singUpSuccess
 * @param data
 * @returns
 */
export const singUpSuccess = (data: schemaValidationSignUpType, history: H.History<any>) => {
     return async (dispatch: Dispatch<ActionUser>) => {
          dispatch({
               type: EnumUserAction.USER_SIGHUP_START,
          })

          try {
               const response = await axios.post('/users', data)
               console.log('me response', response)
               localStorage.setItem('user', JSON.stringify(response.data))
               console.log('the datais ', response)

               dispatch({
                    type: EnumUserAction.USER_SIGHUP_SUCCESS,
                    payload: response.data,
               })

               history.push('/')
          } catch (error) {
               const err = error as AxiosError
               console.log('myass', err)
               // e.response.data.message
               if (err.response) {
                    dispatch({
                         type: EnumUserAction.USER_SIGHUP_FILL,
                         payload: {
                              error: err.response.data.message,
                         },
                    })
               } else {
                    throw new Error('An internal error occurred 500')
               }
          }
     }
}
export const logoutSuccess = () => {
     return (dispatch: Dispatch<ActionUser>) => {
          dispatch({ type: EnumUserAction.USER_LOGOUT })
          localStorage.removeItem('user')
     }
}




/**
 * getProfileAction ALL ACTIONS
 * @returns
 *
 */


export const getProfile = () => {
     return async (dispatch: any, getState: () => TState) => {
          dispatch({
               type: EnumUserAction.GET_PROFILE_START,
          })

          const token = getState().user.user.token as string

          try {
               const response = await axios.get(GET_POFILE_URL, {
                    headers: {
                         'Content-Type': 'application/json',
                         Authorization: `Bearer ${token}`,
                    },
               })


               dispatch({
                    payload: response.data,
                    type: EnumUserAction.GET_PROFILE_SUCCESS,
               })
          } catch (e: any) {
               dispatch({
                    payload: e?.response?.data?.message,
                    type: EnumUserAction.GET_PROFILE_FILL,
               })
          }
     }
}


export const updateProfile = (values: Partial<schemaValidationSignUpType>, history: any) => {
     return async (dispatch: any, getState: () => TState) => {
          dispatch({
               type: EnumUserAction.UPDATE_PROFILE_START,
          })


          const token = getState().user.user.token as string


          try {
               const response = await axios.put(GET_POFILE_URL, {
                    headers: {
                         'Content-Type': 'application/json',
                         Authorization: `Bearer ${token}`,
                    },
               })

               localStorage.setItem('user', JSON.stringify(response.data))


               dispatch({
                    payload: response.data,
                    type: EnumUserAction.UPDATE_PROFILE_SUCCESS,
               })
               history.push('/profile')
          } catch (e: any) {
               dispatch({
                    payload: e?.response?.data?.message,
                    type: EnumUserAction.UPDATE_PROFILE_FILL,
               })
          }
     }
}






export const addReivw = (values: Partial<schemaValidationSignUpType>, history: any) => {
     return async (dispatch: any, getState: () => TState) => {
          dispatch({
               type: EnumUserAction.ADD_REVIEW_START,
          })


          const token = getState().user.user.token as string


          try {
               const response = await axios.put(GET_POFILE_URL, {
                    headers: {
                         'Content-Type': 'application/json',
                         Authorization: `Bearer ${token}`,
                    },
               })

               localStorage.setItem('user', JSON.stringify(response.data))


               dispatch({
                    payload: response.data,
                    type: EnumUserAction.ADD_REVIEW_SUCCESS,
               })
               history.push('/profile')
          } catch (e: any) {
               dispatch({
                    payload: e?.response?.data?.message,
                    type: EnumUserAction.ADD_REVIEW_FILL,
               })
          }
     }
}













export const UserActions = {
     logoutSuccess,
     singUpSuccess,
     loginAction,
     getProfile,
     updateProfile,
}
