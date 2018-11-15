import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/*
* Dont repeat this, it's only for the demo.
*/
const render = (isConcurrent: boolean, switchConcurrency: (val: boolean) => void) => {
  const rootEl = document.getElementById('root');
  if (rootEl) {
    ReactDOM.unmountComponentAtNode(rootEl);
  }

  if (isConcurrent) {
    ReactDOM.createRoot(rootEl).render(
      <App isConcurrent={isConcurrent} switchConcurrency={switchConcurrency} />,
    );
  } else {
    ReactDOM.render(
      <App isConcurrent={isConcurrent} switchConcurrency={switchConcurrency} />,
      rootEl,
    );
  };
}

const init = () => {
  let isConcurrent = false;
  const switchConcurrency = (val: boolean) => {
    isConcurrent = val;
    render(isConcurrent, switchConcurrency);

  };

  render(isConcurrent, switchConcurrency);
};

init();
