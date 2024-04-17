import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { listState } from "@_lib/atoms";
import useGetData from "@_hooks/useGetData";

import PageLayout from "@_components/Layout/PageLayout";
import { StatisticsCard } from "@_components/page/main";
import { ApplyList, NoticeList, SubTitle } from "@_components/UI";

import { NoticeListType } from "@_types/notice";
import { ApplyListType } from "@_types/apply";
import css from "./Main.module.scss";

const Main = () => {
  const setListType = useSetRecoilState(listState);
  const navigate = useNavigate();

  const { data: noticeList, isLoading: noticeLoading } = useGetData("/data/noticeList.json");
  const { data: applyList, isLoading: applyLoading } = useGetData("/data/applyList.json");

  const onChangeListType = (value: string) => {
    setListType(value);
    navigate("/notice/list");
  };

  if (noticeLoading && applyLoading) return <></>;

  return (
    <PageLayout>
      <section className={css.flexWrap}>
        <article className={css.cardBox}>
          {STATISTICS_LIST.map((el, idx) => {
            return <StatisticsCard key={idx} type={el} />;
          })}
        </article>
        <article>
          <div className={css.titleBox}>
            <SubTitle text="채용 공고" />
            <span onClick={() => onChangeListType("noticeList")}>전체보기</span>
          </div>
          <div className={css.listBox}>
            {noticeList.map((list: NoticeListType, idx: number) => {
              if (idx >= 5) return null;
              return <NoticeList key={list.id} {...list} />;
            })}
          </div>
        </article>
        <article>
          <div className={css.titleBox}>
            <SubTitle text="최근 지원자" />
            <span onClick={() => onChangeListType("applyList")}>전체보기</span>
          </div>
          <div className={css.listBox}>
            {applyList.map((list: ApplyListType, idx: number) => {
              if (idx >= 5) return null;
              return <ApplyList key={list.id} {...list} />;
            })}
          </div>
        </article>
      </section>
    </PageLayout>
  );
};

export default Main;

const STATISTICS_LIST = ["apply", "progress", "new", "end"];
