import React from 'react';
import { Router } from '@reach/router';
import { createGlobalStyle } from 'styled-components';
import { UseHooks } from './modules/use-hooks';
import { SuspenseExample } from './modules/suspense';
import { View } from './modules/components';
import { HomeView } from './modules/home';
import { css } from './modules/styled-components';
import { UserContextProvider } from './modules/user';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

const globalWrapper = css`
  min-height: 100vh;
  background-color: #95414147;
`;

function App() {

  return (
    <View customStyles={globalWrapper}>
        <UserContextProvider>
          <Router>
            <HomeView path='/' />
            <UseHooks path='/hooks-everywhere/*' />
            <SuspenseExample path='/suspense/*' />;
          </Router>
        </UserContextProvider>
      <GlobalStyle />
    </View>
  );
}

export default App;
