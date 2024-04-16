import css from "./SubTitle.module.scss";

interface Props {
  text: string;
}

const SubTitle = ({ text }: Props) => {
  return <h3 className={css.title}>{text}</h3>;
};

export default SubTitle;
