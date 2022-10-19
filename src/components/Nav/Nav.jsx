import React from 'react';
import { Link } from 'react-router-dom';
import css from './Nav.module.scss';

const Nav = () => {
  return (
    <section className={css.nav}>
      <Link to="/" className={css.homeBtn}>
        HOME
      </Link>
    </section>
  );
};

export default Nav;
