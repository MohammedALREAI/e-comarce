import Providers from './Provider'
import { AllRouter } from './Router'
import { Navbar } from './Component/NavBar/Navbar'
import { MainContainer } from './Component/widget/Section'
import ErrorBoundary from './Component/ErrorBoundary/ErrorBoundary'
import { Suspense } from 'react'
import { SpinnerContainer } from './Component/widget/SpinnerContainer'
function App() {
  return (
    <Providers>
            <MainContainer>
                 <Suspense fallback={ <SpinnerContainer/>}>
                         <ErrorBoundary>

        <Navbar />
        <AllRouter />
                </ErrorBoundary>
                </Suspense>

      </MainContainer>
    </Providers>
  )
}

export default App
