import DivideText from "../DivideText";
import css from "./ApplyList.module.scss";

interface Props {
  noticeTitle: string;
  name: string;
  career: string;
  applyDate: string;
  email: string;
  phone: string;
}

const ApplyList = ({ noticeTitle, name, career, applyDate, email, phone }: Props) => {
  return (
    <div className={css.listWrap}>
      <div>
        <span className={css.noticeTitle}>{noticeTitle}</span>
        <div className={css.name}>{name}</div>
      </div>
      <div className={css.subInfoBox}>
        <DivideText type="apply" front={career} back={applyDate} />
        <DivideText type="apply" front={email} back={phone} />
      </div>
    </div>
  );
};

export default ApplyList;
