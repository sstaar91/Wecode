import css from "./Textarea.module.scss";

interface Props {
  value: string;
  disabled: boolean;
}

const Textarea = ({ value, disabled }: Props) => {
  return <textarea className={css.textarea} disabled={disabled} value={value} />;
};

export default Textarea;
