import { ActionUser, EnumUserAction } from './userType'
import IUserState, { User } from './shapeState.interface'




const initialState: IUserState = {
     user: {
          _id: '',
          email: '',
          token: '',
          name: '',
     },
     userProfile: {
          user: {
               _id: '',
               email: '',
               token: '',
               name: '',
          },
          isLoading: false,
          success: false,
          error: '',

     },
     success: false,
     isLoading: false,
     error: '',
}





export const UserReducer = (state = initialState, action: ActionUser): IUserState => {
     switch (action.type) {
          // START ALL STATUS OF THE  DIGNUP

          case EnumUserAction.USER_SIGHUP_START:
               return { ...state, isLoading: true }
          case EnumUserAction.USER_SIGHUP_SUCCESS:
               return {
                    ...state,
                    user: action.payload,
                    isLoading: false,
                    success: true,

               }
          case EnumUserAction.USER_SIGHUP_FILL:
               return {
                    ...state,
                    error: action.payload,
                    isLoading: false,

               }

          // FINS ALL STATUS OF THE  DIGNUP


          /**START THE LOGIN  STATUS   */

          case EnumUserAction.USER_LOGIN_START:
               return {
                    ...state,
                    isLoading: true,

               }

          case EnumUserAction.USER_LOGIN_SUCCESS:
               return {
                    ...state,
                    user: action.payload as User,
                    isLoading: false,
                    success: true,

               }

          case EnumUserAction.USER_LOGIN_FILL:
               return {
                    ...state,
                    error: action.payload,
                    isLoading: true,

               }
          /**END  THE LOGIN  STATUS   */

          /**LOGOUT  THE LOGIN  STATUS   */



          /** get User */


          case EnumUserAction.GET_PROFILE_START:
               return {
                    ...state,
                    userProfile: {
                         isLoading: true,
                    },
               }

          case EnumUserAction.GET_PROFILE_SUCCESS:
               return {
                    ...state,
                    userProfile: {
                         user: action.payload,
                         isLoading: false,
                         success: true,
                    },
               }
          case EnumUserAction.GET_PROFILE_FILL:
               return {
                    ...state,
                    userProfile: {
                         error: action.payload as string,
                         isLoading: false,
                    },
               }



          /** update user  */

          case EnumUserAction.UPDATE_PROFILE_START:
               return {
                    ...state,
                    userProfile: {
                         isLoading: true,
                    },
               }

          case EnumUserAction.UPDATE_PROFILE_SUCCESS:
               return {
                    ...state,
                    userProfile: {
                         user: action.payload as User,
                         isLoading: false,
                         success: true,
                    },
               }

          case EnumUserAction.UPDATE_PROFILE_FILL:
               return {
                    ...state,
                    userProfile: {
                         error: action.payload,
                         isLoading: false,
                    },
               }





          /** end get uswr  */

          case EnumUserAction.USER_LOGOUT:
               return {
                    ...state,
                    user: { ...state.user },
               }
          default:
               return initialState
     }
}
