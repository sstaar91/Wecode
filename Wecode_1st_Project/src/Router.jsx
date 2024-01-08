import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './pages/Main';
import List from './pages/List';
import Detail from './pages/Detail';
import Footer from './components/Footer';
import KakaoAuth from './components/Nav/Login/KakaoAuth';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth/kakao" element={<KakaoAuth />} />
        <Route path="/list" element={<List />} />
        <Route path="/list/:id" element={<List />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
