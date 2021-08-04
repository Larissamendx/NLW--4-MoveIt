import React, { useState } from 'react';
import { Provider } from 'next-auth/client'
import { ThemeProvider } from 'styled-components';
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

import GlobalStyle from '../styles/global';
import usePersistedState from '../../hooks/usePersistedState';

function MyApp({ Component, pageProps}) {
  const [theme, setTheme] = usePersistedState('theme', light);
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light)
    setIsDarkMode(isDarkMode === true ? false : true)
  }

  return (
    <Provider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <Component toggleTheme={toggleTheme} {...pageProps}/>
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
