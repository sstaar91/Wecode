import { ReactNode } from "react";
import css from "./Label.module.scss";

interface Props {
  children: ReactNode;
  bg: string;
}

const Label = ({ children, bg }: Props) => {
  return <label className={`${css.default} ${css[bg]}`}>{children}</label>;
};

export default Label;
