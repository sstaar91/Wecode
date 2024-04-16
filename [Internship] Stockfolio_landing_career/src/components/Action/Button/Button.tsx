import { ReactNode } from "react";
import css from "./Button.module.scss";

interface Props {
  children: ReactNode;
  type?: string;
  addStyle?: string;
  disabled?: boolean;
  onClickButton: () => void;
}

const Button = ({ children, type = "", addStyle = "", disabled = false, onClickButton }: Props) => {
  return (
    <button className={`${css.default} ${css[type]} ${css[addStyle]}`} disabled={disabled} onClick={onClickButton}>
      {children}
    </button>
  );
};

export default Button;
