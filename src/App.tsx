
import Providers from './Provider'
import { Layout } from './Layout/layout'
import { AllRouter } from './Router'
function App() {
    return (
       <Providers>
           <Layout>
                   <AllRouter/>
           </Layout>
        </Providers>
    )
}

export default App
