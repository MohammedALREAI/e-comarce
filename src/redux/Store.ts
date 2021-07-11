import { SearchReducer } from './Search/SearchRrducer'
import { OrderReducer } from './Order/OrderReducer'
import { CartReducer } from './Cart/CartRrducer'
import { AppActions } from './types.d'
import { UserReducer } from './User/index'
import promiseMiddleware from 'redux-promise'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { GuestReducer } from './Guest'
import { composeWithDevTools } from 'redux-devtools-extension'
import { FetchFeathersReducer } from './FeatuerPorduct/FeatuerPorductRrducer'

const reducers = combineReducers({
     user: UserReducer,
     gust: GuestReducer,
     cart: CartReducer,
     order: OrderReducer,
     fetchFeathers: FetchFeathersReducer,
     Search: SearchReducer,
})


const userFromLocalStorage = JSON.parse(localStorage.getItem('user') || '{}')
const shippingFromLocalStorage = JSON.parse(localStorage.getItem('shipping') || '{}')
const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '{}')
console.log('mms', userFromLocalStorage)
export type TState = ReturnType<typeof reducers>



const initialState = {
     user: {
          user: userFromLocalStorage,
     },
     cart: {
          cart: cartFromLocalStorage,
          shippingAddress: shippingFromLocalStorage,
     },
}
console.log('data ----- ', initialState.user)

const middleware = [thunk]

const Store = createStore(
     reducers,
     initialState,
     composeWithDevTools(applyMiddleware(...middleware)),
)
export type AppDispatch = typeof Store.dispatch


console.log('data -----2 ', initialState.user)

console.log('data -----3 ', Store.getState())


declare const Window: any

Window.store = Store
export default Store
