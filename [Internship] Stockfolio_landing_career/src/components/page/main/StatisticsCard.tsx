import css from "./StatisticsCard.module.scss";

interface Props {
  type: string;
}

const StatisticsCard = ({ type }: Props) => {
  const infoList: { [key: string]: string } = {
    apply: "오늘의 지원자",
    progress: "진행 중인 공고",
    new: "새로 등록된 공고",
    end: "곧 마감 될 공고",
  };

  return (
    <div className={css.card}>
      <h4 className={css.title}>{infoList[type]}</h4>
      <h3 className={css.count}>5</h3>
    </div>
  );
};

export default StatisticsCard;
