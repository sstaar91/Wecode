import React from 'react';
import SearchBar from '../../components/SearchBar';
import RecommendList from './components/RecommendList';
import css from './Main.module.scss';

const Main = () => {
  return (
    <section className={css.container}>
      <div className={css.banner}>
        <h2>근손실 없는 단백질 맛집이 궁금하다면?</h2>
        <h2>탱고플레이스</h2>
        <SearchBar />
      </div>
      <RecommendList />
      {/* <EatDealContainer /> */}
    </section>
  );
};

export default Main;
