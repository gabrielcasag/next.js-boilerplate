import { ThemeProvider } from 'styled-components';

import GlobalStyles from '@/styles/globals';
import theme from '@/styles/theme';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
