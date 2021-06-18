import './App.css'
import './index.css'
import { ThemeProvider } from 'styled-components'
import useTheme from './theme/useTheme'
import { GlobalStyle } from './theme/GlobalStyle'
import { Navbar } from './Component/NavBar/Navbar'
import { MainContainer } from './Component/me'
import { Layout } from './layout/layout'
import { Slider } from './Component/Slider/slider'
import { FeaturedProducts } from './pages/Gust/FeaturedProducts/FeaturedProducts'
import { TopRate } from './pages/Gust/TopRate/TopRate'
import { Search as SearchPage } from './pages/Gust/Search/search'
import { ShoppingCart as ShoppingCartPage } from './pages/User/ShoppingCart/ShoppingCart'
import { PaymentSuccess as PaymentSuccessPage } from './pages/User/PaymentSuccess/PaymentSuccess'
import { OrderItems as OrderItemsPage } from './pages/User/caardRender/orderItems'
import { HomeScreen } from './pages/Gust/HomeScreen/Home'
// import { FeaturedProducts } from './pages/Gust/FeaturedProducts/FeaturedProducts'



function App() {
    const theme = useTheme()
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <MainContainer>
           <Navbar/>
           <HomeScreen/>
           {/* <OrderItemsPage/> */}
           {/* <SearchPage/> */}
           {/* <PaymentSuccessPage/> */}
           {/* <ShoppingCartPage/> */}
             {/* <OrderItems/>  */}
           {/* <Search/> */}
           {/* <PaymentSuccess/> */}
           {/* <ShoppingCart/> */}
           {/* <FeaturedProducts/> */}
           {/* <TopRate/>   */}
           </MainContainer>
        </ThemeProvider>
    )
}

export default App
