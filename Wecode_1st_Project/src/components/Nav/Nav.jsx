import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import kakaoLogin from './Login/kakaoData';
import css from './Nav.module.scss';

const Nav = () => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [isOpenMyPage, setIsOpenMyPage] = useState(false);
  const token = localStorage.getItem('tango');
  const { KAKAO_URL } = kakaoLogin;

  const handleMyPage = () => {
    token ? setIsOpenMyPage(true) : setIsOpenLoginModal(true);
  };

  return (
    <nav className={css.nav}>
      <Link to="/">
        <img src="/images/tangoLogo.png" alt="logo" />
      </Link>
      <div className={css.mypage} onClick={handleMyPage}>
        MY
      </div>
      {isOpenLoginModal && (
        <Modal handleModal={setIsOpenLoginModal}>
          <h2 className={css.title}>Login</h2>
          <a className={css.loginBtn} href={KAKAO_URL}>
            카카오로 로그인
          </a>
        </Modal>
      )}
      {isOpenMyPage && (
        <Modal handleModal={setIsOpenMyPage}>
          <span>마이페이지</span>
        </Modal>
      )}
    </nav>
  );
};

export default Nav;
