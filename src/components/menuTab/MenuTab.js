import React, { useState } from 'react';
import { MenuDiv } from './MenuDiv';

import './MenuTab.scss';

export const MenuTab = () => {
  const [navBar, setNavBar] = useState({});
  const [navContents, setNavContents] = useState('');

  const mouseOn = e => {
    const { innerText } = e.target;
    setNavBar(navBar => ({ ...navBar, [innerText]: true }));
    setNavContents(innerText);
  };

  const mouseOver = e => {
    const { innerText } = e.target;
    setNavBar(navBar => ({ ...navBar, [innerText]: false }));
    setNavContents(innerText);
  };

  return (
    <article className="menuTabWrap">
      <div>
        <h2>메뉴 탭 hover에 따른 boolean 값 구현</h2>
        <div className="menuWrap">
          {DIV_NAME.map(list => {
            return (
              <MenuDiv
                key={list}
                mouseOn={mouseOn}
                mouseOver={mouseOver}
                title={list}
              />
            );
          })}
          <div className="result">result : {navContents}</div>
        </div>
      </div>
    </article>
  );
};

const DIV_NAME = ['one', 'two', 'three', 'four'];
