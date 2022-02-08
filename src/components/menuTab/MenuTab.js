import React, { useState } from 'react';

import './MenuTab.scss';

export const MenuTab = () => {
  const [navBar, setNavBar] = useState({
    one: true,
    two: false,
    three: false,
  });

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
          <div
            onMouseEnter={mouseOn}
            onMouseLeave={mouseOver}
            className="menuTap"
          >
            one
          </div>
          <div
            onMouseEnter={mouseOn}
            onMouseLeave={mouseOver}
            className="menuTap"
          >
            two
          </div>
          <div
            onMouseEnter={mouseOn}
            onMouseLeave={mouseOver}
            className="menuTap"
            s
          >
            three
          </div>
          <div className="result">result : {navContents}</div>
        </div>
      </div>
    </article>
  );
};
