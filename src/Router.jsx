import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import List from './pages/List';
import Main from './pages/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list/:id" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
