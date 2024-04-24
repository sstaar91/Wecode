import { useNavigate, useParams } from "react-router-dom";
import useGetData from "@_hooks/useGetData";

import { Label } from "@_components/UI";
import PageLayout from "@_components/Layout/PageLayout";
import { CommentCard, InfoBox } from "@_components/page/applicant";

import { ApplyCareerType, ApplyProejctType, CommentType } from "@_types/apply";
import css from "./Applicant.module.scss";

const Applicant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useGetData(`/data/applicant/${id}.json`);

  const onClickNoticeTitle = () => {
    navigate("/notice");
  };

  if (isLoading) return <></>;

  const basicInfo = {
    title: "기본 정보",
    list: [
      [
        { title: "이름", value: data.name },
        { title: "이메일", value: data.email },
        { title: "전화번호", value: data.phone },
      ],
    ],
  };

  const careerInfo = {
    title: "경력 사항",
    list: data.career.map((list: ApplyCareerType) => {
      return [
        { title: "회사명", value: list.company },
        { title: "직급", value: list.position },
        { title: "입사", value: list.startAt },
        { title: "퇴사", value: list.endAt },
        { title: "담당업무", value: list.work },
      ];
    }),
  };

  const projectInfo = {
    title: "프로젝트 수행이력",
    list: data.project.map((list: ApplyProejctType) => {
      return [
        { title: "프로젝트명", value: list.title },
        { title: "시작", value: list.startAt },
        { title: "종료", value: list.startAt },
        { title: "기술", value: list.endAt },
        { title: "", value: list.description },
      ];
    }),
  };

  const selfIntroInfo = {
    title: "자기소개",
    list: [[{ title: "", value: data.intro }]],
  };

  const eduInfo = {
    title: "학력 정보",
    list: [
      [
        { title: "학력", value: data.edu },
        { title: "학교명", value: data.schoolName },
        { title: "전공", value: data.major },
        { title: "학점", value: data.grades },
        { title: "졸업여부", value: data.status },
        { title: "입학", value: data.enter },
        { title: "졸업", value: data.grauation },
      ],
    ],
  };

  const careerType = data.career.length === 0 ? "rookie" : "veteran";

  return (
    <PageLayout>
      <section className={css.container}>
        <article className={css.applycantInfoBox}>
          <div>
            <Label bg={careerType}>{careerType === "rookie" ? "신입" : "경력"}</Label>
            <div className={css.titleBox}>
              <h2 className={css.name}>{data.name}</h2>
              <div className={css.infoBox}>
                <span onClick={onClickNoticeTitle}>{data.noticeTitle}</span>
                <span>지원일 : {data.applyDate}</span>
              </div>
            </div>
          </div>
          <InfoBox data={basicInfo} />
          <InfoBox data={careerInfo} />
          <InfoBox data={projectInfo} />
          <InfoBox data={selfIntroInfo} />
          <InfoBox data={eduInfo} />
        </article>
        <article className={css.commentWrap}>
          <CommentCard type="write" />
          {data.comment.map((comment: CommentType) => {
            return <CommentCard key={comment.id} type="read" {...comment} />;
          })}
        </article>
      </section>
    </PageLayout>
  );
};

export default Applicant;
