import { ReactNode } from "react";
import css from "./Button.module.scss";

interface Props {
  children: ReactNode;
  onClickButton: () => void;
}

const Button = ({ children, onClickButton }: Props) => {
  return (
    <button className={`${css.default}`} onClick={onClickButton}>
      {children}
    </button>
  );
};

export default Button;
