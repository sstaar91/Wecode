import React from 'react';
import { MenuTab } from '../../components/menuTab/MenuTab';
import { SelectBox } from '../../components/selectBox/SelectBox';
import { ImgSlide } from '../../components/imgSlide/ImgSlide';

export const First = () => {
  return (
    <section>
      <h1>1차 프로젝트 기준으로 기능 구현</h1>
      <MenuTab />
      <SelectBox />
      <ImgSlide />
    </section>
  );
};
