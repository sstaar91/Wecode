import React from 'react';
import css from './Login.module.scss';

const Login = () => {
  return (
    <article className={css.container}>
      <div className={css.box}>
        <h1 className={css.title}>로그인</h1>
        <form className={css.inputWrap}>
          <div>
            <span className={css.inputTitle}>Id</span>
            <input />
          </div>
          <div>
            <span className={css.inputTitle}>Password</span>
            <input />
          </div>
          <button>클릭</button>
        </form>
      </div>
    </article>
  );
};

export default Login;
