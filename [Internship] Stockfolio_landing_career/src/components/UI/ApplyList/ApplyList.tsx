import { useNavigate } from "react-router-dom";
import DivideText from "../DivideText";
import css from "./ApplyList.module.scss";

interface Props {
  id: number;
  noticeTitle: string;
  name: string;
  career: string;
  applyDate: string;
  email: string;
  phone: string;
}

const ApplyList = ({ id, noticeTitle, name, career, applyDate, email, phone }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className={css.listWrap}
      onClick={() => {
        navigate(`/notice/apply/${id}`);
      }}
    >
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
