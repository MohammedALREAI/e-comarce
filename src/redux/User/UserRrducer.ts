import { ActionUser, EnumUserAction } from './userType'
import IUserState, { User } from './shapeState.interface'



const temp = localStorage.getItem('user')
const user = temp ? JSON.parse(temp) : {}
console.log('useris', user)
const initialState: IUserState = {

     userProfile: {
          user: {},
          isLoading: false,
          success: false,
          error: '',
     },
}




export const UserReducer = (state = initialState, action: ActionUser): IUserState => {
     switch (action.type) {
          // START ALL STATUS OF THE  DIGNUP

          case EnumUserAction.GET_PROFILE_START:
               return {
                    userProfile: {
                         ...state.userProfile,
                         isLoading: true,
                    },
               }

          case EnumUserAction.GET_PROFILE_SUCCESS:
               return {
                    userProfile: {
                         error: '',
                         user: action.payload.user,
                         isLoading: false,
                         success: true,

                    },
               }
          case EnumUserAction.GET_PROFILE_FILL:
               return {
                    userProfile: {
                         ...initialState.userProfile,
                         isLoading: false,
                         error: action.payload.error,
                    },

               }




          case EnumUserAction.UPDATE_PROFILE_START:
               return {
                    userProfile: {
                         ...state.userProfile,
                         isLoading: true,
                    },
               }

          case EnumUserAction.UPDATE_PROFILE_SUCCESS:
               return {
                    userProfile: {
                         error: '',
                         user: action.payload.user,
                         isLoading: false,
                         success: true,
                    },
               }

          case EnumUserAction.UPDATE_PROFILE_FILL:
               return {
                    userProfile: {
                         ...initialState.userProfile,
                         error: action.payload.error,
                         isLoading: false,
                    },
               }

          default:
               return state
     }
}
