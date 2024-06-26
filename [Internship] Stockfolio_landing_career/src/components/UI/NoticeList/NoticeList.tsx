import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { listState } from "@_lib/atoms";

import { Button } from "@_components/Action";
import Label from "../Label";
import DivideText from "../DivideText";

import css from "./NoticeList.module.scss";

interface Props {
  id: number;
  position: string;
  noticeTitle: string;
  noticeType: string;
  deadLine: string;
  count: number;
  refetch?: () => void;
}

const NoticeList = ({ id, position, noticeTitle, noticeType, deadLine, count, refetch = () => {} }: Props) => {
  const setListType = useSetRecoilState(listState);
  const navigate = useNavigate();

  const labelType: { [key: string]: string } = {
    경력: "veteran",
    신입: "rookie",
  };

  return (
    <div className={css.listWrap}>
      <div className={css.infoBox}>
        <Label bg={labelType[position]}>{position}</Label>
        <div className={css.noticeTitle}>{noticeTitle}</div>
      </div>
      <div className={css.infoBox}>
        <DivideText type="notice" front={noticeType} back={deadLine} />
        <Button
          type="notice"
          addStyle={count === 0 ? "emptyApply" : ""}
          disabled={count === 0}
          onClickButton={() => {
            setListType("applyList");
            navigate(`/notice/list/${id}`);
          }}
        >
          지원자 리스트 ({count})
        </Button>
      </div>
    </div>
  );
};

export default NoticeList;
