import { useRecoilState } from "recoil";
import { Navigate } from "react-router-dom";
import { listState } from "@_lib/atoms";
import useGetData from "@_hooks/useGetData";

import { ApplyList, NoticeList, SubTitle } from "@_components/UI";
import PageLayout from "@_components/Layout/PageLayout";

import { NoticeListType } from "@_types/notice";
import { ApplyListType } from "@_types/apply";
import css from "./List.module.scss";

const List = () => {
  const [listType] = useRecoilState(listState);
  const { data, isLoading } = useGetData(`/data/${listType}.json`);

  if (data === undefined) return <Navigate to="/main" />;
  if (isLoading) return <></>;

  return (
    <PageLayout>
      <div className={css.titleBox}>
        <SubTitle text={listType === "noticeList" ? "채용 공고" : "최근 지원자"} />
      </div>
      {listType === "noticeList"
        ? data.map((list: NoticeListType) => {
            return <NoticeList key={list.id} {...list} />;
          })
        : data.map((list: ApplyListType) => {
            return <ApplyList key={list.id} {...list} />;
          })}
    </PageLayout>
  );
};

export default List;
