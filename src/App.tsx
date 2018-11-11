import React from 'react';
import { Router } from '@reach/router';
import { createGlobalStyle } from 'styled-components';
import { UseHooks } from './modules/use-hooks';
import { View } from './modules/components';
import { css } from './modules/styled-components';

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
  height: 100vh;
  background-color: darkslategrey;
`;

function App() {
  return (
    <View customStyles={globalWrapper}>
      <Router>
        <UseHooks path='/hooks-everywhere' />
      </Router>
      <GlobalStyle />
    </View>
  );
}

export default App;
