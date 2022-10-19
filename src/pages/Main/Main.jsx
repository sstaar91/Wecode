import React from 'react';
import css from './Main.module.scss';

const Main = () => {
  return (
    <article className={css.main}>
      <h1 className={css.title}>Scss Function Archive</h1>
      <section className={css.container}>
        <div className={css.card}>Login</div>
      </section>
    </article>
  );
};

export default Main;
