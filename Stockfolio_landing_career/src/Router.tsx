import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserForm } from "./pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
