import React from 'react';
import SearchBar from '../../components/SearchBar';
import css from './Main.module.scss';

const Main = () => {
  return (
    <section className={css.container}>
      {/* <SearchFocus modalActive={isSearchModalActive} /> */}
      <div className={css.banner}>
        <h2>강한 사장님만 살아남는 이 곳!</h2>
        <h2>탱크플레이스</h2>
        <SearchBar />
      </div>
      <article>
        {/* <ShopListContainer /> */}
        {/* <EatDealContainer /> */}
      </article>
    </section>
  );
};

export default Main;
