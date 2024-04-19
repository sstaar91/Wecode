import css from "./NoticeCard.module.scss";

interface Props {
  id: number;
  noticeTitle: string;
  deadLine: string;
  isShow: boolean;
  onSelect: () => void;
}

const NoticeCard = ({ noticeTitle, deadLine, isShow, onSelect }: Props) => {
  return (
    <div className={`${css.cardBox} ${isShow ? css.selectBox : ""}`} onClick={onSelect}>
      <span className={css.noticeTitle}>{noticeTitle}</span>
      <span className={css.deadLine}>{deadLine}</span>
    </div>
  );
};

export default NoticeCard;
