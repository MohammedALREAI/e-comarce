import { ActionAuth, EnumAuthAction } from './AuthType'
import IAuthState from './shapeState.interface'


const temp = localStorage.getItem('user')
const user = temp ? JSON.parse(temp) : {}


const initialState: IAuthState = {
     user: {
          _id: user ? user._id : '',
          email: user ? user.email : '',
          token: user ? user.token : '',
          name: user ? user.name : '',
     },
     success: false,
     isLoading: false,
     error: '',
}


export const AuthReducer = (state = initialState, action: ActionAuth): IAuthState => {
     switch (action.type) {
          // START ALL STATUS OF THE  DIGNUP

          case EnumAuthAction.USER_SIGHUP_START:
               return { ...state, isLoading: true }
          case EnumAuthAction.USER_SIGHUP_SUCCESS:
               return {
                    ...state,
                    user: action.payload.user,
                    isLoading: false,
                    success: true,

               }
          case EnumAuthAction.USER_SIGHUP_FILL:
               return {
                    ...state,
                    error: action.payload.error,
                    isLoading: false,

               }

          // FINS ALL STATUS OF THE  DIGNUP


          /**START THE LOGIN  STATUS   */

          case EnumAuthAction.USER_LOGIN_START:
               return {
                    ...state,
                    isLoading: true,

               }

          case EnumAuthAction.USER_LOGIN_SUCCESS:
               return {
                    ...state,
                    user: action.payload.user,
                    isLoading: false,
                    success: true,

               }

          case EnumAuthAction.USER_LOGIN_FILL:
               return {
                    ...state,
                    error: action.payload.error,
                    isLoading: true,

               }
          /**END  THE LOGIN  STATUS   */
          case EnumAuthAction.USER_LOGOUT:
               return initialState

          default:
               return initialState
     }
}
