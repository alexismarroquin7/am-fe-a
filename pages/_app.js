// style
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from '../hooks/useDarkMode';
import { GlobalStyles, theme } from "../styles";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const { darkMode } = useDarkMode(false);
  return (
  <ThemeProvider theme={darkMode ? theme.dark : theme.light}>
    <GlobalStyles />
    <Component {...pageProps} />
  </ThemeProvider>

  )
}

export default MyApp
