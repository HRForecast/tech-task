import 'intl';
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';

import { defaultTheme } from 'themes/default';
import { en } from 'translations/en';
import { App } from 'layouts/App';
import { flattenMessages } from 'utils/selectors';

const queryClient = new QueryClient();
const messages = flattenMessages({ en });

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={defaultTheme}>
      <IntlProvider locale="en" messages={messages} defaultLocale="en">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </IntlProvider>
    </ThemeProvider>
  </QueryClientProvider>,
  document.getElementById('root')
);
