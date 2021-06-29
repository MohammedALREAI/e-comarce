import { CartReducer } from './Cart/CartRrducer'
import { AppActions } from './types.d'
import { UserReducer } from './User/index'
import promiseMiddleware from 'redux-promise'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { GuestReducer } from './Guest'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
     user: UserReducer,
     gust: GuestReducer,
     cart: CartReducer,
})


const tempCart = localStorage.getItem('cart')
const tempUser = localStorage.getItem('user')
const userFromLocalStorage = tempUser ? JSON.parse(tempUser) : {}

const cartFromLocalStorage = tempCart ? JSON.parse(tempCart) : []

export type TState = ReturnType<typeof rootReducer>

const middleware = [promiseMiddleware, thunk as ThunkMiddleware<TState, AppActions>]

const preloadedState = {
     user: {
          user: userFromLocalStorage,
     },
     cart: {
          cart: cartFromLocalStorage,
     },
}

const Store = createStore(
     rootReducer,
     preloadedState,
     composeWithDevTools(applyMiddleware(...middleware)),
)


export default Store
