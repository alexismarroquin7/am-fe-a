// style
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, theme } from "../styles";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Component {...pageProps} />
  </ThemeProvider>

  )
}

export default MyApp
