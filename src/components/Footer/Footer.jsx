import React from 'react';
import css from './Footer.module.scss';

const Footer = () => {
  return (
    <section className={css.container}>
      <article className={css.box}>
        <div className={css.logoWrap}>
          <img
            className={css.logo}
            alt="tangoPlate Logo"
            src="images/tangoGreyLogo.svg"
          />
          <p className={css.description}>Eat, Share, Be Happy</p>
        </div>
        <div className={css.infoWrap}>
          {PROJECT_LIST.map(text => {
            return <h3 key={text}>{text}</h3>;
          })}
        </div>
        <div className={css.infoWrap}>
          {INFO_LIST.map(text => {
            return <p key={text}>{text}</p>;
          })}
        </div>
      </article>
    </section>
  );
};

export default Footer;

const PROJECT_LIST = [
  '프로젝트 소개',
  '탱고플레이트 팀원',
  '탱고플레이트 팀워크',
  '채용 문의',
];

const INFO_LIST = [
  '위코드 23기 첫번째 프로젝트',
  '주소 : 서울특별시 강남구 테헤란로 427 위워크',
  '팀명 : 탱고플레이트',
  '고객센터는 차후에 진행하겠습니다',
];
