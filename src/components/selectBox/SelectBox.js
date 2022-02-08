import React, { useState } from 'react';
import './SelectBox.scss';

export const SelectBox = () => {
  const [size, setSize] = useState('');

  const checkSize = e => {
    setSize(e.target.value);
  };

  return (
    <article className="selectWrap">
      <div>
        <h2>드롭박스 HTML 태그로 구현</h2>
        <label className="selectDiv">사이즈 선택</label>
        <select onChange={checkSize}>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
        <div className="selectResult">result : {size}</div>
      </div>
    </article>
  );
};
