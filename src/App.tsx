import { ThemeProvider } from 'styled-components'
import useTheme from './Theme/useTheme'
import { GlobalStyle } from './Theme/GlobalStyle'
import { Navbar } from './Component/NavBar/Navbar'
import { MainContainer } from './Component/me'
// import { MainContainer } from 'Component/me'

import { FeaturedProducts } from './pages/Gust/FeaturedProducts/FeaturedProducts'
import { TopRate } from './pages/Gust/TopRate/TopRate'
import { Search as SearchPage } from './pages/Gust/Search/search'
import { ShoppingCart as ShoppingCartPage } from './pages/User/ShoppingCart/ShoppingCart'
import { PaymentSuccess as PaymentSuccessPage } from './pages/User/PaymentSuccess/PaymentSuccess'
import { OrderItems as OrderItemsPage } from './pages/User/caardRender/orderItems'
import { Review } from './pages/User/payment/review/review'
import { ReviewTow } from './pages/User/payment/review/reviewtow'
import { HomeScreen } from './pages/Gust/HomeScreen/Home'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Login } from './pages/Auth/Login/Login'
import { Signup } from './pages/Auth/Signup/Signup'
import { CreateProduct } from './pages/Admin/Products/CreateProduct'
import { Products } from './pages/Admin/Products/Products'
import { Profile } from 'pages/User/Profile/Profile'
function App() {
    const theme = useTheme()
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <MainContainer>
                    <Navbar/>
                    <BrowserRouter>

                <Switch>
                        {/* genaral item  */}

                    <Route exact path="/" component={HomeScreen}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="/search" component={SearchPage}/>
                    <Route exact path="/top-rate" component={TopRate}/>
                    <Route exact path="/featured-products-rate" component={FeaturedProducts}/>
                        {/* genaral item  */}

                    {/* //user  */}
                    <Route exact path="/cart" component={ShoppingCartPage}/>
                    <Route exact path="/order-items" component={OrderItemsPage}/>
                    <Route exact path="/payment-succuss" component={PaymentSuccessPage}/>
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


           </MainContainer>
        </ThemeProvider>
    )
}

export default App
