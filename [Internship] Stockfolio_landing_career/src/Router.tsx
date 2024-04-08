import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages";
import { Toast } from "@_components/UI";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <Toast />
    </BrowserRouter>
  );
};

export default Router;
