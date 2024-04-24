/* eslint-disable @typescript-eslint/no-explicit-any */
import { Divider, SubTitle } from "@_components/UI";
import { Textarea } from "@_components/Action";

import css from "./InfoBox.module.scss";

interface Props {
  data: { title: string; list: any[] };
}

const InfoBox = ({ data }: Props) => {
  return (
    <div className={css.detailInfoBox}>
      <SubTitle text={data.title} />
      <div>
        {data.list.map((el: any[], idx: number) => {
          return (
            <div className={`${css.InfoCardWarp}`} key={idx}>
              {el.map((values: { title: string; value: string }, idx: number) => {
                if (values.title === "") {
                  return <Textarea key={idx} disabled={true} value={values.value} />;
                } else {
                  return (
                    <div className={css.infoCard} key={idx}>
                      <span>{values.title}</span>
                      <span>{values.value}</span>
                    </div>
                  );
                }
              })}
            </div>
          );
        })}
      </div>
      <div />
      <Divider />
    </div>
  );
};

export default InfoBox;
