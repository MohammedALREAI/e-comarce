import { lazy } from 'react'
import { Switch, Route } from 'react-router-dom'
import { ReviewTow } from './pages/User/payment/review/reviewtow'
import PrivateRoute from './utils/Route'
import { useToken } from './utils/useToken'


const Login = lazy(() => import('./pages/Auth/Login/Login'))
const Signup = lazy(() => import('./pages/Auth/Signup/Signup'))

const NotFoundScreen = lazy(() => import('./pages/Gust/NotFoundScreen/NotFoundScreen'))
const Review = lazy(() => import('./pages/User/payment/review/review'))

const ProductItem = lazy(() => import('./pages/Gust/ProductItem/ProductItem'))
const UpdateProfile = lazy(() => import('./pages/User/Profile/UpdateProfile'))
const Profile = lazy(() => import('./pages/User/Profile/Profile'))
const PaymentSuccess = lazy(() => import('./pages/User/PaymentSuccess/PaymentSuccess'))
const HomeScreen = lazy(() => import('./pages/Gust/HomeScreen/Home'))
const SearchScreen = lazy(() => import('./pages/Gust/SearchScreen/searchScreen'))
const ShoppingCart = lazy(() => import('./pages/User/ShoppingCart/ShoppingCart'))
// const OrderItems = lazy(() => import('./pages/user/caardRender/orderItems'))

// OrderItems




export const AllRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route path={'/product/:id'} component={ProductItem} />
      <Route exact path="/search" component={SearchScreen} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <PrivateRoute exact path="/profile" component={Profile} />
      <PrivateRoute exact path="/cart" component={ShoppingCart} />
      {/* <PrivateRoute token={token} exact path="/order-items" component={OrderItems} /> */}
      <PrivateRoute exact path="/payment-succuss" component={PaymentSuccess} />
      <PrivateRoute exact path="/update-profile" component={UpdateProfile} />
      <PrivateRoute exact path="/review" component={Review} />
      <PrivateRoute exact path="/review-tow" component={ReviewTow} />
      <PrivateRoute exact path={'/product/:id'} component={ProductItem} />
      <Route exact path="*" component={NotFoundScreen} />
    </Switch>
  )
}
