import React from 'react';
import css from './SearchBar.module.scss';

const SearchBar = () => {
  return (
    <div className={css.container}>
      <img
        src="/images/icons/search.png"
        alt="search_icon"
        className={css.seacrhIcon}
      />
      <input className={css.input} />
      <button className={css.button}>검색</button>
    </div>
  );
};

export default SearchBar;
