import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Pages />
  </React.StrictMode>,
  document.getElementById('root')
);
