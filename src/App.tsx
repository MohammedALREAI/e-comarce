import './App.css'
import { Container, Row, Typography } from './widget/styles'
import './index.css'
import { ThemeProvider } from 'styled-components'
import useTheme from './theme/useTheme'
import { GlobalStyle } from './theme/GlobalStyle'
import { LeftCard } from './Component/leftCard'
import { RightCard } from './Component/rigthCard'
function App() {
    const theme = useTheme()
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Container>
            <Row >

            <LeftCard/>
            <RightCard/>
            </Row>
                </Container>
        </ThemeProvider>
    )
}

export default App
