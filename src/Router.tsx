import { Search, ShoppingCart } from '@material-ui/icons'

import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { CreateProduct } from './pages/Admin/Products/CreateProduct'
import { Products } from './pages/Admin/Products/Products'
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

export const AllRouter = () => {
    return (
        <BrowserRouter>

        <Switch>
                {/* genaral item  */}

            <Route exact path="/" component={HomeScreen}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/search" component={Search}/>
            <Route exact path="/top-rate" component={TopRate}/>
            <Route exact path="/featured-products-rate" component={FeaturedProducts}/>
                {/* genaral item  */}

            {/* //user  */}
            <Route exact path="/cart" component={ShoppingCart}/>
            <Route exact path="/order-items" component={OrderItems}/>
            <Route exact path="/payment-succuss" component={PaymentSuccess}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/review" component={Review}/>
            <Route exact path="/review-tow" component={ReviewTow}/>
                {/* user end */}

                {/* userAdmin  */}
                <Route exact path="/admin-Products" component={Products}/>
                <Route exact path="/admin-create-Products" component={CreateProduct}/>

                {/* userAdmin  */}


        </Switch>
            </BrowserRouter>
    )
}
