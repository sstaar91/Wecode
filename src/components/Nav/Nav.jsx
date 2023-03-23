import React from 'react';
import css from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={css.nav}>
      <img src="/images/tangoLogo.png" alt="logo" />
      <div className={css.mypage}>MY</div>
    </nav>
  );
};

export default Nav;
