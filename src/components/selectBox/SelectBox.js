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
        <select onChange={checkSize} className="selectTarget">
          <option value="categori" hidden>
            카테고리
          </option>
          {OPTION_DATA.map((data, idx) => {
            return <OptionList text={data} key={idx} />;
          })}
        </select>
        <div className="selectResult">result : {size}</div>
      </div>
    </article>
  );
};

const OptionList = ({ text }) => {
  return <option value={text}>{text}</option>;
};

const OPTION_DATA = ['S', 'M', 'L', 'XL', 'XXL'];
