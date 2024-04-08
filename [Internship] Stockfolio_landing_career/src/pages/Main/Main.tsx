import PageLayout from "@_components/Layout/PageLayout";
import { StatisticsCard } from "@_components/page/main";

import css from "./Main.module.scss";

const Main = () => {
  return (
    <PageLayout>
      <div className={css.cardBox}>
        <StatisticsCard />
        <StatisticsCard />
        <StatisticsCard />
        <StatisticsCard />
      </div>
    </PageLayout>
  );
};

export default Main;
