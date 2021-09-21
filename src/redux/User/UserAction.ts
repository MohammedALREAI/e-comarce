import { useToken } from '../../utils/useToken'
import { schemaValidationSignUpType } from '../../utils/validation'
import { Dispatch } from 'redux'
import axios from '../../utils/Axios'
import { EnumUserAction, TGetProfile, TUpdateProfile } from './userType'
import { TState } from '../Store'

import * as H from 'history'




export const getProfile = () => {
     return async (dispatch: Dispatch<TGetProfile>) => {
          dispatch({
               type: EnumUserAction.GET_PROFILE_START,
          })


          try {
               const response = await axios.get('/users/profile')
               console.log('dispatch getProfile response ', response)


               dispatch({
                    payload: { user: response.data },
                    type: EnumUserAction.GET_PROFILE_SUCCESS,
               })
          } catch (e: any) {
               console.log(e)
               dispatch({
                    payload: { error: e?.response?.data?.message },
                    type: EnumUserAction.GET_PROFILE_FILL,
               })
          }
     }
}


export const updateProfile = (values: Partial<schemaValidationSignUpType>, history: H.History<any>) => {
     return async (dispatch: Dispatch<TUpdateProfile>, getState: () => TState) => {
          console.log('updateProfile')
          dispatch({
               type: EnumUserAction.UPDATE_PROFILE_START,
          })


          const token = useToken()



          try {
               const response = await axios.put('/users/profile')

               localStorage.setItem('user', JSON.stringify(response.data))


               dispatch({
                    payload: { user: response.data },
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








export const UserActions = {
     getProfile,
     updateProfile,
}
