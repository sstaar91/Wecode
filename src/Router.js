import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Main } from './Main';
import { First } from './pages/first/First';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/first" element={<First />} />
      </Routes>
    </BrowserRouter>
  );
}
