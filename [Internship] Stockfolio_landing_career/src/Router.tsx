import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "@_components/Nav";
import { List, Login, Main, Notice } from "./pages";
import { Toast } from "@_components/UI";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/notice/list" element={<List />} />
      </Routes>
      <Toast />
    </BrowserRouter>
  );
};

export default Router;
