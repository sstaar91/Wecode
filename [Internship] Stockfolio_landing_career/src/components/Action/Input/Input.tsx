import { ChangeEvent } from "react";
import { Label } from "@_components/UI";
import css from "./Input.module.scss";

interface Props {
  title?: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ title, type, name, placeholder, value, onChangeInput }: Props) => {
  return (
    <div className={css.container}>
      {title && <Label text={title} />}
      <input className={css.default} type={type} name={name} value={value} placeholder={placeholder} onChange={onChangeInput} />
    </div>
  );
};

export default Input;
