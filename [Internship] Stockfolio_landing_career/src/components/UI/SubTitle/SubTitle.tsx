import css from "./SubTitle.module.scss";

interface Props {
  text: string;
}

const SubTitle = ({ text }: Props) => {
  return <h1 className={css.title}>{text}</h1>;
};

export default SubTitle;
