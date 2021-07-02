import { TState } from './../Store'
import { ActionOrderPlace, EnumOrderAction } from './OrderType'
import { Dispatch } from 'redux'
import axios from 'axios'




export const placeOrder = () => {
     return async (dispatch: Dispatch<ActionOrderPlace>, getState: () => TState) => {
          dispatch({
               type: EnumOrderAction.PLACE_FILL,
               payload: 'the order still not available right now so please  ',
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







export const UserActions = {
     logoutSuccess,
     singUpSuccess,
     loginAction,
     getProfile,
     updateProfile,
}
