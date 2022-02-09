import React from 'react';

export const MenuDiv = ({ mouseOn, mouseOver, title }) => {
  return (
    <div onMouseEnter={mouseOn} onMouseLeave={mouseOver} className="menuTap">
      {title}
    </div>
  );
};
