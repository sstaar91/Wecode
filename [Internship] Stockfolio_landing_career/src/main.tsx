import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import Router from "./Router";
import "@_styles/reset.scss";
import "@_styles/global.scss";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <Router />
  </RecoilRoot>
);
