import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Main } from './Main';
import { First } from './Pages/First';
import { Second } from './Pages/Second';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/first" element={<First />} />
        <Route path="/second" element={<Second />} />
      </Routes>
    </BrowserRouter>
  );
}
