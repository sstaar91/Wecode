import React, { useState } from 'react';
import { LoginInput } from './LoginInput';

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
    <div>
      <span>로그인 유효성 검사</span>
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
  );
};

const INPUT_DATA = [
  { id: 1, type: 'text', name: 'id' },
  { id: 2, type: 'password', name: 'passoword' },
  { id: 3, type: 'text', name: 'username' },
];
