import { ToastContainer, Flip } from "react-toastify";
import css from "./Toast.module.scss";

const Toast = () => {
  return (
    <div className={css.toast}>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        theme="colored"
        transition={Flip}
      />
    </div>
  );
};

export default Toast;
