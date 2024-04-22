import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { listState } from "@_lib/atoms";
import useGetData from "@_hooks/useGetData";

import PageLayout from "@_components/Layout/PageLayout";
import { DivideText, Label, SubTitle } from "@_components/UI";
import { Button } from "@_components/Action";
import NoticeCard from "@_components/page/notice/NoticeCard";

import { NoticeListType } from "@_types/notice";
import { CATEGORY_LIST } from "@_constants/notice";
import { LOREM_TEXT } from "@_constants/testText";
import css from "./Notice.module.scss";

const Notice = () => {
  const { data, isLoading } = useGetData("/data/noticeList.json");
  const [curCategory, setCurCategory] = useState("all");
  const [curNoticeIdx, setCurNoticeIdx] = useState(0);
  const setListType = useSetRecoilState(listState);

  const navigate = useNavigate();

  const onSelectCategory = (value: string) => {
    setCurCategory(value);
    setCurNoticeIdx(0);
  };

  const onSelectNoticeList = (id: number) => {
    setCurNoticeIdx(id);
  };

  if (isLoading) return <></>;

  const filterData = data.filter((el: NoticeListType) => (curCategory === "all" ? el : el.category === curCategory));
  const { id, position, author, noticeTitle, noticeType, deadLine, count } = filterData[curNoticeIdx];

  const labelType: { [key: string]: string } = {
    경력: "veteran",
    신입: "rookie",
  };

  return (
    <PageLayout>
      <div className={css.titleBox}>
        <SubTitle text="공고 내역" />
        <div className={css.filterBox}>
          {CATEGORY_LIST.map(({ id, title, value }) => {
            const noticeCount = data.filter((el: NoticeListType) => el.category === value).length;

            return (
              <div key={id} className={css.category} onClick={() => onSelectCategory(value)}>
                {title} <Label bg={curCategory === value ? "select" : "not"}>{value === "all" ? data.length : noticeCount}</Label>
              </div>
            );
          })}
        </div>
      </div>
      <article className={css.noticeBox}>
        <div className={css.noticeListBox}>
          {filterData.map((list: NoticeListType, idx: number) => {
            return <NoticeCard key={list.id} {...list} isShow={curNoticeIdx === idx} onSelect={() => onSelectNoticeList(idx)} />;
          })}
        </div>
        <div className={css.noticeDetail}>
          <div className={css.noticeHeader}>
            <Label bg={labelType[position]}>{position}</Label>
            <div className={css.headerInfoBox}>
              <button>수정</button>
              <button>삭제</button>
              <span>게시자 : {author}</span>
            </div>
          </div>
          <div className={css.noticeTitleBox}>
            <div className={css.noticeTitleInfo}>
              <h2>{noticeTitle}</h2>
              <DivideText type="default" front={noticeType} back={deadLine} />
            </div>
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
          <div className={css.descriptionBox}>
            {LOREM_TEXT}
            {LOREM_TEXT}
            {LOREM_TEXT}
          </div>
        </div>
      </article>
    </PageLayout>
  );
};

export default Notice;
