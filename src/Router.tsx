import { Search, ShoppingCart } from '@material-ui/icons'

import { Switch, Route } from 'react-router-dom'
import { Login } from './pages/Auth/Login/Login'
import { Signup } from './pages/Auth/Signup/Signup'
import { FeaturedProducts } from './pages/Gust/FeaturedProducts/FeaturedProducts'
import { HomeScreen } from './pages/Gust/HomeScreen/Home'
import { TopRate } from './pages/Gust/TopRate/TopRate'
import { OrderItems } from './pages/User/caardRender/orderItems'
import { Review } from './pages/User/payment/review/review'
import { ReviewTow } from './pages/User/payment/review/reviewtow'
import { PaymentSuccess } from './pages/User/PaymentSuccess/PaymentSuccess'
import { Profile } from './pages/User/Profile/Profile'
import { UpdateProfile } from './pages/User/Profile/UpdateProfile'
import { ProductItem } from './pages/Gust/ProductItem/ProductItem'
import { useSelector } from 'react-redux'
import { TState } from './redux/Store'
import { SearchScreen } from './pages/Gust/SearchScreen/searchScreen'
import NotFoundScreen from './pages/Gust/NotFoundScreen/NotFoundScreen'

interface AllRoute {
  path: string;
  component: import('react').ReactNode;
}
// const Auth: AllRoute[] = [
//      {
//      path: '/profile',
//      component: Profile,
//      },
//      {
//      path: '/cart',
//      component: ShoppingCart,
//      },
//      {
//      path: '/order-items',
//      component: OrderItems,
//      },
//      {
//      path: '/payment-succuss',
//      component: PaymentSuccess,
//      },
//      {
//      path: '/update-profile',
//      component: PaymentSuccess,
//      },
//      {
//      path: '/review',
//      component: PaymentSuccess,
//      },
//      {
//      path: '/review-tow',
//      component: ReviewTow,
//      },
//      {
//      path: '/product/:id/:name',
//      component: ProductItem,
//      },

// ]


const _id = JSON.parse(localStorage.getItem('user') || '{}')?._id
console.log('mys is ', _id)

const IsAuth = (
  <>
    <Route exact path="/profile" component={Profile} />
 <Route exact path="/cart" component={ShoppingCart} />
        <Route exact path="/order-items" component={OrderItems} />
        <Route exact path="/payment-succuss" component={PaymentSuccess} />
        <Route exact path="/update-profile" component={UpdateProfile} />
        <Route exact path="/review" component={Review} />
        <Route exact path="/review-tow" component={ReviewTow} />
        <Route exact path={'/product/:id'} component={ProductItem} />
  </>
)

const General = (
  <>
    <Route exact path="/" component={HomeScreen} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />

    <Route exact path="/search" component={Search} />
    <Route exact path="/top-rate" component={TopRate} />
    <Route exact path="/featured-products-rate" component={FeaturedProducts} />
  </>
)

export const AllRouter = () => {
  const user = useSelector((state: TState) => state.user)

  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route path={'/product/:id'} component={ProductItem} />
      <Route exact path="/search" component={SearchScreen} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/update-profile" component={UpdateProfile} />
      <Route exact path="*" component={NotFoundScreen} />

      {_id
? (
        <>
          <Route exact path="/profile" component={Profile} />
          <Route exact path={'/product/:id'} component={ProductItem} />
          <Route exact path="/update-profile" component={UpdateProfile} />
        </>
      )
: (
        <>
          <Route exact path="/search" component={SearchScreen} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </>
      )}
    </Switch>
  )
}
