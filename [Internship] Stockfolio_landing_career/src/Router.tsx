import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "@_components/Nav";
import { Login } from "./pages";
import Main from "./pages/Main";
import { Toast } from "@_components/UI";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
      <Toast />
    </BrowserRouter>
  );
};

export default Router;
