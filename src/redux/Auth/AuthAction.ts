import { SignupAction } from './../User/userType'
import { schemaValidationSignUpType, schemaValidationLoginType } from '../../utils/validation'
import { Dispatch } from 'redux'
import axios from 'axios'
import { EnumAuthAction, TLoginAction, TLogoutAction, TSignupAction } from './AuthType'

import * as H from 'history'


export const loginAction = (userData: schemaValidationLoginType, history: H.History<any>) => {
     return async (dispatch: Dispatch<TLoginAction>) => {
          dispatch({
               type: EnumAuthAction.USER_LOGIN_START,
          })

          try {
               const response = await axios.post('/users/login', userData)
               localStorage.setItem('user', JSON.stringify(response.data))

               dispatch({
                    type: EnumAuthAction.USER_LOGIN_SUCCESS,
                    payload: {
                         user: response.data,
                    },
               })
               history.push('/profile')
          } catch (e: any) {
               dispatch({
                    type: EnumAuthAction.USER_LOGIN_FILL,
                    payload: {
                         error: e?.response?.data?.message,
                    },
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
     return async (dispatch: Dispatch<TSignupAction>) => {
          dispatch({
               type: EnumAuthAction.USER_SIGHUP_START,
          })

          try {
               const response = await axios.post('/users', data)
               console.log('me response', response)
               localStorage.setItem('user', JSON.stringify(response.data))
               console.log('the datais ', response)

               dispatch({
                    type: EnumAuthAction.USER_SIGHUP_SUCCESS,
                    payload: response.data,
               })

               history.push('/')
          } catch (e) {
               dispatch({
                    type: EnumAuthAction.USER_SIGHUP_FILL,
                    payload: {
                         error: e?.response?.data?.message,
                    },
               })
          }
     }
}
export const logoutSuccess = () => {
     return (dispatch: Dispatch<TLogoutAction>) => {
          dispatch({ type: EnumAuthAction.USER_LOGOUT })
          localStorage.removeItem('user')
     }
}













export const AuthActions = {
     logoutSuccess,
     singUpSuccess,
     loginAction,

}
