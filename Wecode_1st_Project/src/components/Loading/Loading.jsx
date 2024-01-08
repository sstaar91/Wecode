import React from 'react';
import css from './Loading.module.scss';

const Loading = () => {
  return (
    <div className={css.loading}>
      <img
        src="/images/loading_Chicken.png"
        alt="loading"
        className={css.chicken}
      />
      <span className={css.description}>
        단백질을 구하고 있는 중이에요! 잠시만 기다려주세요!
      </span>
    </div>
  );
};

export default Loading;
