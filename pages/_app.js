// style
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from '../hooks/useDarkMode';
import { GlobalStyles, theme } from "../styles";
import '../styles/globals.css'
import { Nav } from '../widgets';
import { Grid } from '../components';

function MyApp({ Component, pageProps }) {
  const { darkMode } = useDarkMode(false);
  return (
  <ThemeProvider theme={darkMode ? theme.dark : theme.light}>
    <GlobalStyles />
    <Grid
      direction="column wrap"
      alignItems="center"
    >
      <Nav />
      <Component {...pageProps} />
    </Grid>
  </ThemeProvider>
  )
}

export default MyApp
