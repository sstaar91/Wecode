import React from 'react';
import css from './Loading.module.scss';

const Loading = () => {
  return (
    <div className={css.loading}>
      <img
        src="/images/icons/loading.png"
        alt="loading"
        className={css.infinity}
      />
    </div>
  );
};

export default Loading;
