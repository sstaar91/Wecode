import { ChangeEvent } from "react";
import css from "./Input.module.scss";

interface Props {
  title?: string;
  titleColor?: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ title, titleColor = "black", type, name, placeholder, value, onChangeInput }: Props) => {
  return (
    <div className={css.container}>
      {title && <span className={`${css.title} ${css[titleColor]}`}>{title}</span>}
      <input className={css.default} type={type} name={name} value={value} placeholder={placeholder} onChange={onChangeInput} />
    </div>
  );
};

export default Input;
