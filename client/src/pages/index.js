import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/** importing our pages */
import Quotes from './quotes';

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Quotes />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}
