import { ReviewReducer } from './Review/ReviewRrducer'
import { AuthReducer } from './Auth/AuthRrducer'
import { SearchReducer } from './Search/SearchRrducer'
import { OrderReducer } from './Order/OrderReducer'
import { CartReducer } from './Cart/CartRrducer'
import { UserReducer } from './User/index'
import thunk from 'redux-thunk'
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
     auth: AuthReducer,
     review: ReviewReducer,
})

const temp = localStorage.getItem('user')
const user = temp ? JSON.parse(temp) : {}


const shippingFromLocalStorage = JSON.parse(localStorage.getItem('shipping') || '{}')
const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '{}')
// console.log('mms', userFromLocalStorage)
export type TState = ReturnType<typeof reducers>


console.log('the user is', user)





const initialState = {
     auth: {
          user,
     },
     cart: {
          cart: cartFromLocalStorage,
          shippingAddress: shippingFromLocalStorage,
     },
}
console.log('data ----- ', initialState.auth)

const middleware = [thunk]

const Store = createStore(
     reducers,
     initialState,
     composeWithDevTools(applyMiddleware(...middleware)),
)
export type AppDispatch = typeof Store.dispatch


console.log('data -----2 ', initialState.auth)

console.log('data -----3 ', Store.getState())


declare const Window: any

Window.store = Store
export default Store
