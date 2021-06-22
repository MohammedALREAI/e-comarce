import { UserReducer } from './User/UserRrducer'
import promiseMiddleware from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
// we need to setup the redux to support the async and the  by both applyMiddleware promiseMiddleware+ReduxThunk

const rootReducer = combineReducers({
    user: UserReducer,
})


const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)


const devToolsExtension = ((window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()) || compose
export const useStore = () => createStoreWithMiddleware(rootReducer, devToolsExtension)
