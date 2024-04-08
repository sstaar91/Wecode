import css from "./Label.module.scss";

interface Props {
  text: string;
  color?: string;
}

const Label = ({ text, color = "gray" }: Props) => {
  return <label className={`${css.default} ${css[color]}`}>{text}</label>;
};

export default Label;
