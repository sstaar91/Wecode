import css from "./DivideText.module.scss";

interface Props {
  type: string;
  front: string;
  back: string;
}

const DivideText = ({ type, front, back }: Props) => {
  return (
    <div className={css.textWrap}>
      <span>{front}</span>
      <span className={`${css.divider} ${type === "default" ? css.blackDived : ""}`}>|</span>
      <span>
        {back} {type === "notice" && "마감"}
      </span>
    </div>
  );
};

export default DivideText;
