import { IUserState, UserAction } from './UserAction'
import { UserTypeAction } from './userTypeAction'


const initialState :IUserState = {
    user: {
_id: '',
email: '',
token: '',
name: '',
},
 }

export const UserReducer = (initialState: IUserState, action:UserAction):IUserState => {
    switch (action.type) {
        case UserTypeAction.USER_LOGIN_SUCCESS:
            return action.user
            break
            default:
                return initialState
    }
}
