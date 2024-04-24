import { ChangeEvent, useRef } from "react";
import css from "./Textarea.module.scss";

interface Props {
  value: string;
  disabled?: boolean;
  onChangeValue?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = ({ value, disabled = false, onChangeValue = () => {} }: Props) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  const handleTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChangeValue(e);

    if (ref && ref.current) {
      ref.current.style.height = "0px";
      const scrollHeight = ref.current.scrollHeight;
      ref.current.style.height = scrollHeight + "px";
    }
  };

  return <textarea ref={ref} className={css.textarea} disabled={disabled} value={value} onChange={handleTextarea} rows={1} />;
};

export default Textarea;
