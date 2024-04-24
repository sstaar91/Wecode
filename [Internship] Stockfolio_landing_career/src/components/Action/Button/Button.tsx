import { ReactNode } from "react";
import css from "./Button.module.scss";

interface Props {
  children: ReactNode;
  name?: string;
  type?: string;
  addStyle?: string;
  clicked?: string;
  disabled?: boolean;
  onClickButton: () => void;
}

const Button = ({ children, type = "", name = "", addStyle = "", clicked = "", disabled = false, onClickButton }: Props) => {
  return (
    <button name={name} className={`${css.default} ${css[type]} ${css[addStyle]} ${css[clicked]}`} disabled={disabled} onClick={onClickButton}>
      {children}
    </button>
  );
};

export default Button;
