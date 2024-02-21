import React from 'react';
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles';
import Pages from './pages';

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Pages />
  </React.StrictMode>
);
