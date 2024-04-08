import css from "./StatisticsCard.module.scss";

const StatisticsCard = () => {
  return (
    <div className={css.card}>
      <h4 className={css.title}>오늘의 지원자</h4>
      <h3 className={css.count}>5</h3>
    </div>
  );
};

export default StatisticsCard;
