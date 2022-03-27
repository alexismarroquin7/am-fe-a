// components
import { Grid } from '../components';

// widgets
import { Nav, MobileMenu } from '../widgets';

// store
import { Provider as ReduxProvider, useSelector } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "../store";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// hooks
import { useDarkMode } from '../hooks/useDarkMode';

// style
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, theme } from "../styles";
import '../styles/globals.css'

const middleware = applyMiddleware(thunk, logger);
const store = createStore(
  rootReducer,
  middleware
);

function MyApp({ Component, pageProps }) {
  const { darkMode } = useDarkMode(false);
  
  return (
  <ReduxProvider store={store}>
    <ThemeProvider theme={darkMode ? theme.dark : theme.light}>
      <GlobalStyles />
      <Grid
        direction="column wrap"
        alignItems="center"
        position="relative"
      >
        <Nav />
        <MobileMenu />
        <Component {...pageProps} />
      </Grid>
    </ThemeProvider>
  </ReduxProvider>
  )
}

export default MyApp
