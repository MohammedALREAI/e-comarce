import { URL_IMAGES } from './../../Const/env'
import { schemaValidationSignUpType, schemaValidationLoginType } from '../../utils/validation'
import { Dispatch } from 'redux'
import axios from '../../utils/Axios'
import { EnumAuthAction, TLoginAction, TLogoutAction, TSignupAction } from './AuthType'

import * as H from 'history'


export const loginAction = (userData: schemaValidationLoginType, history: H.History<any>) => {
     return async (dispatch: Dispatch<TLoginAction>) => {
          console.log(dispatch)
          dispatch({
               type: EnumAuthAction.USER_LOGIN_START,
          })

          try {
               const response = await axios.post('/users/login', userData)
               localStorage.setItem('user', JSON.stringify(response.data))
               console.log('ther response is login', response)

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
export const logoutSuccess = (history: H.History<any>) => {
     return (dispatch: Dispatch<TLogoutAction>) => {
          dispatch({ type: EnumAuthAction.USER_LOGOUT })
          localStorage.removeItem('user')
          history.push('/login')
     }
}













export const AuthActions = {
     logoutSuccess,
     singUpSuccess,
     loginAction,

}
