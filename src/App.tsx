import Providers from './Provider'
import { AllRouter } from './Router'
import { Navbar } from './Component/NavBar/Navbar'
import { MainContainer } from './Component/widget/Section'
function App() {
  return (
    <Providers>
      <MainContainer>
        <Navbar />
        <AllRouter />
      </MainContainer>
    </Providers>
  )
}

export default App
