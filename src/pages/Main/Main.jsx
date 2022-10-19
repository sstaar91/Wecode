import React from 'react';
import { Link } from 'react-router-dom';
import css from './Main.module.scss';

const Main = () => {
  return (
    <article className={css.main}>
      <h1 className={css.title}>Scss Function Archive</h1>
      <section className={css.container}>
        <Link to="/login" className={css.card}>
          Login
        </Link>
      </section>
    </article>
  );
};

export default Main;
