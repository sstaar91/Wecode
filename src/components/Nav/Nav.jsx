import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import UserForm from './UserForm/UserForm';
import css from './Nav.module.scss';

const Nav = () => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [isOpenMyPage, setIsOpenMyPage] = useState(false);
  const token = localStorage.getItem('tango');

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
          <UserForm />
        </Modal>
      )}
    </nav>
  );
};

export default Nav;
