import { Dispatch } from 'redux'
import axios from 'axios'
import { User } from './shapeState.interface'
import { EnumUserAction, LoginData, ProfileAction, SighupData, SignupAction, ActionUser, LoginAction } from './userType'
import { TState } from '../Store'
 const USER_LOGIN_URL = '/users/login'
const USER_SUIGNUP_URL = '/users'
const GET_POFILE_URL = '/users/profile'

 /**
  * loginSuccess
  * @param userData
  * @returns  the the  action contaions the data and type
  *
  */
  const loginAction = (userData:LoginData, history:any) => {
   return async(dispatch:Dispatch<LoginAction>) => {
  /*** enter the login statrt wich will be convert the loading  to it   */
    dispatch({
      type: EnumUserAction.USER_LOGIN_START,
    })

  try {
    const response = await axios.post(USER_LOGIN_URL, userData)
    localStorage.setItem('user', JSON.stringify(response.data))

    dispatch({
      type: EnumUserAction.USER_LOGIN_SUCCESS,
       payload: response.data as User,
    })
    history.push('/')
  } catch (e:any) {
        dispatch({
type: EnumUserAction.USER_LOGIN_FILL,
payload: '' + e.response.data.message,
})
}
}
}




/**
 * singUpSuccess
 * @param data
 * @returns
 */
 const singUpSuccess = (data:SighupData, history:any) => {
  return async(dispatch:Dispatch<SignupAction>) => {
    dispatch({
      type: EnumUserAction.USER_SIGHUP_START,
    })

  try {
    const response = await axios.post(USER_SUIGNUP_URL, data)
    localStorage.setItem('user', JSON.stringify(response.data))

    dispatch({
      type: EnumUserAction.USER_SIGHUP_SUCCESS,
      payload: response.data as User,
    })

    console.log(response.data)
    history.push('/')
  } catch (e:any) {
    dispatch({
        type: EnumUserAction.USER_SIGHUP_FILL,
        payload: '' + e.response.data.message,
      })
  }
}
 }
 const logoutSuccess = () => {
  return (dispatch:Dispatch<ActionUser>) => {
    localStorage.removeItem('user')

  dispatch({ type: EnumUserAction.USER_LOGOUT })
}
 }




 /**
  * getProfileAction ALL ACTIONS
  * @returns
  *
  */


 export const getProfile = () => {
  return async (dispatch:Dispatch<ProfileAction>, getState:() => TState) => {
    dispatch({
      type: EnumUserAction.GET_PROFILE_START,
    })

    const state = getState()

    const {
      user: {
        user: { token },
      },
    } = state

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
    } catch (e:any) {
      dispatch({
        payload: e?.response?.data?.message,
        type: EnumUserAction.GET_PROFILE_FILL,
      })
    }
  }
}


interface updateProfileValue{
name?:string,
email?:string,
password?:string,
confirmPassword?:string

}


 export const updateProfile = (value:updateProfileValue, history:any) => {
  return async (dispatch:Dispatch<ProfileAction>, getState:() => TState) => {
    dispatch({
      type: EnumUserAction.UPDATE_PROFILE_START,
    })

    const state = getState()

    const {
      user: {
        user: { token },
      },
    } = state

    try {
      const response = await axios.put(GET_POFILE_URL, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })

      dispatch({
        payload: response.data,
        type: EnumUserAction.UPDATE_PROFILE_SUCCESS,
      })
    } catch (e:any) {
      dispatch({
        payload: e?.response?.data?.message,
        type: EnumUserAction.UPDATE_PROFILE_FILL,
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
