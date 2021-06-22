import React from 'react'
import { ThemeProvider } from 'styled-components'

import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { useStore } from './redux/Store'
import useTheme from './Theme/useTheme'
import { GlobalStyle } from './Theme/GlobalStyle'


const Providers: React.FC = ({ children }) => {
  const theme = useTheme()
  const store = useStore()

  return (
      <Provider store={store}>
          <HelmetProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
                 {children}
                 </ThemeProvider>
          </HelmetProvider>
      </Provider>
  )
}

export default Providers
