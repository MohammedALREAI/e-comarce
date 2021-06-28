import { AppActions } from './types.d'
import { UserReducer } from './User/index'
import promiseMiddleware from 'redux-promise'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { GuestReducer } from './Guest'
// we need to setup the redux to support the async and the  by both applyMiddleware promiseMiddleware+ReduxThunk
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
    user: UserReducer,
    gust: GuestReducer,
})


const temp = localStorage.getItem('user')
const userFromLocalStorage = temp ? JSON.parse(temp) : {}
export type TState = ReturnType<typeof rootReducer>

const middleware = [promiseMiddleware, thunk as ThunkMiddleware<TState, AppActions>]

const initialState = {
  user: {
    user: userFromLocalStorage,
  },
}

 const Store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware)),
  )


  export default Store
