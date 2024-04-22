import { useRecoilState } from "recoil";
import { Navigate, useParams } from "react-router-dom";
import { listState } from "@_lib/atoms";
import useGetData from "@_hooks/useGetData";

import { ApplyList, NoticeList, SubTitle } from "@_components/UI";
import PageLayout from "@_components/Layout/PageLayout";

import { NoticeListType } from "@_types/notice";
import { ApplyListType } from "@_types/apply";
import css from "./List.module.scss";

const List = () => {
  const [listType] = useRecoilState(listState);
  const { data, isLoading, refetch } = useGetData(`/data/${listType}.json`);
  const { id } = useParams();

  if (data === undefined) return <Navigate to="/main" />;
  if (isLoading) return <></>;

  const noticeTitle = id ? data.filter((el: ApplyListType) => el.noticeId === Number(id))[0].noticeTitle : "";
  const applyData = id ? data.filter((el: ApplyListType) => el.noticeTitle === noticeTitle) : data;

  return (
    <PageLayout>
      <div className={css.titleBox}>
        {id ? (
          <div className={css.noticeDetailApply}>
            <SubTitle text="지원자 리스트" />
            <h2 className={css.noticeTitle}>{noticeTitle || ""}</h2>
            <div />
          </div>
        ) : (
          <SubTitle text={listType === "noticeList" ? "채용 공고" : "최근 지원자"} />
        )}
      </div>
      {(data.legnth === 0 || applyData.length === 0) && <div>리스트가 없습니다</div>}
      {listType === "noticeList"
        ? data.map((list: NoticeListType) => {
            return <NoticeList key={list.id} {...list} refetch={refetch} />;
          })
        : applyData.map((list: ApplyListType) => {
            return <ApplyList key={list.id} {...list} />;
          })}
    </PageLayout>
  );
};

export default List;
