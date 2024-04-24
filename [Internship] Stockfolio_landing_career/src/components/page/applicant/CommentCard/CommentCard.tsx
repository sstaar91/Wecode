import { ChangeEvent, useState } from "react";
import moment from "moment";

import { SubTitle } from "@_components/UI";
import { Button, Textarea } from "@_components/Action";

import css from "./CommentCard.module.scss";

interface Props {
  type: string;
  assess?: string;
  createAt?: string;
  userName?: string;
  description?: string;
}

const CommentCard = ({ type, assess = "", createAt = "", userName = "", description }: Props) => {
  const [commentData, setCommentData] = useState({
    comment: "",
    status: "",
  });

  const { comment, status } = commentData;

  const isWriteComment = type === "write";

  const onClickStatus = (value: string) => {
    setCommentData((prev) => ({ ...prev, status: value }));
  };

  const curDate = moment().format("YYYY/MM/DD a hh:mm");

  const onChangeComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > 300) return;
    setCommentData((prev) => ({ ...prev, comment: e.target.value }));
  };

  const assessList: { [key: string]: string } = {
    good: "좋아요",
    normal: "그냥 그래요",
    bad: "별로에요",
  };

  return (
    <div className={`${css.commentCard} ${isWriteComment ? "" : css[assess]}`}>
      <div className={css.cardHeader}>
        {isWriteComment ? <SubTitle text="평가하기" /> : <span className={css[assess]}>{assessList[assess]}</span>}
        {isWriteComment ? (
          <span className={css.realTime}>{curDate}</span>
        ) : (
          <div className={css.defaultInfoBox}>
            <span className={css.author}>{userName}</span>
            <span className={css.realTime}>작성일 : {createAt}</span>
          </div>
        )}
      </div>
      {isWriteComment && (
        <div className={css.statusBox}>
          {BUTTON_STATUS_LIST.map(({ id, name, style, title }) => {
            return (
              <Button
                key={id}
                type="status"
                addStyle={name}
                clicked={status === name ? style : ""}
                onClickButton={() => {
                  onClickStatus(name);
                }}
              >
                {title}
              </Button>
            );
          })}
        </div>
      )}
      <Textarea value={description ? description : comment} disabled={!isWriteComment} onChangeValue={onChangeComment} />
      {isWriteComment && (
        <div className={css.cardBottom}>
          <span className={css.commentLength}>{comment.length} / 300</span>
          <Button type="send" onClickButton={() => {}}>
            제출
          </Button>
        </div>
      )}
    </div>
  );
};

export default CommentCard;

const BUTTON_STATUS_LIST = [
  { id: 1, name: "good", style: "activeGood", title: "좋아요" },
  { id: 2, name: "normal", style: "activeNormal", title: "별로에요" },
  { id: 3, name: "bad", style: "activeBad", title: "싫어요" },
];
