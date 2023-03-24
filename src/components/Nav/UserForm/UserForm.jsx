import React, { useState } from 'react';
import css from './UserForm.module.scss';

const initialState = { name: '', id: '', password: '' };

const UserForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userInfo, setUserInfo] = useState(initialState);

  const { name, id, password } = userInfo;

  const handelUserInfo = e => {
    const { name, value } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  const handelSignup = () => {
    setIsLogin(prev => !prev);
    setUserInfo(initialState);
  };

  return (
    <form
      className={css.container}
      onClick={e => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <span className={css.title}>{isLogin ? 'Login' : 'Signup'}</span>
      {!isLogin && (
        <input
          className={css.input}
          name="name"
          type="text"
          value={name}
          placeholder="이름"
          onChange={handelUserInfo}
        />
      )}
      <input
        className={css.input}
        name="id"
        type="text"
        value={id}
        placeholder="아이디"
        onChange={handelUserInfo}
      />
      <input
        className={css.input}
        name="password"
        type="password"
        value={password}
        placeholder="비밀번호"
        onChange={handelUserInfo}
      />
      {isLogin && <button className={css.loginBtn}>로그인</button>}
      <button className={css.signupBtn} onClick={handelSignup}>
        회원가입
      </button>
    </form>
  );
};

export default UserForm;
