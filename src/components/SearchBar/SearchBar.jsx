import React, { useState, useEffect } from 'react';
import { combineStyle } from '../../utils/styles';
import css from './SearchBar.module.scss';

const SearchBar = () => {
  const [isFocusSearch, setIsFocusSearch] = useState(false);

  useEffect(() => {
    window.document.addEventListener('click', () => {
      setIsFocusSearch(false);
    });
  }, []);

  const activeInput = e => {
    e.stopPropagation();
    setIsFocusSearch(prev => !prev);
  };

  const containerStyle = combineStyle(
    `${css.container}`,
    isFocusSearch,
    `${css.full}`,
    `${css.min}`
  );

  const inputStyle = combineStyle(
    `${css.input}`,
    isFocusSearch,
    `${css.active}`,
    `${css.hidden}`
  );

  const buttonStyle = combineStyle(
    `${css.button}`,
    isFocusSearch,
    `${css.active}`,
    `${css.hidden}`
  );

  return (
    <div className={containerStyle}>
      <img
        src="/images/icons/search.png"
        alt="search_icon"
        className={css.seacrhIcon}
        onClick={activeInput}
      />
      <input
        className={inputStyle}
        maxLength={60}
        onClick={e => {
          e.stopPropagation();
        }}
      />
      <button className={buttonStyle}>검색</button>
    </div>
  );
};

export default SearchBar;
