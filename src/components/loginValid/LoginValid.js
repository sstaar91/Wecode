import React, { useState } from 'react';
import { LoginInput } from './LoginInput';
import './LoginValid.scss';

export const LoginValid = () => {
  const [loginData, setLoginData] = useState({
    id: '',
    passoword: '',
    username: '',
  });
  const dataValid = loginData.id && loginData.passoword && loginData.username;

  const check = () => {
    dataValid ? alert('굿') : alert('다시');
  };

  return (
    <article className="validWrap">
      <div>
        <h2>로그인 유효성 검사</h2>
        <div className="validInput">
          {INPUT_DATA.map(data => {
            return (
              <LoginInput
                key={data.id}
                type={data.type}
                name={data.name}
                setLoginData={setLoginData}
              />
            );
          })}
          <button onClick={dataValid ? check : null}>로그인</button>
        </div>
      </div>
    </article>
  );
};

const INPUT_DATA = [
  { id: 1, type: 'text', name: 'id' },
  { id: 2, type: 'password', name: 'passoword' },
  { id: 3, type: 'text', name: 'username' },
];
