import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "@_components/Nav";
import { Admin, Applicant, List, Login, Main, Manage, Notice } from "./pages";
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
        <Route path="/notice/list/:id" element={<List />} />
        <Route path="/notice/apply/:id" element={<Applicant />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Toast />
    </BrowserRouter>
  );
};

export default Router;
