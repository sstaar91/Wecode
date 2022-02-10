import React, { useState } from 'react';
import { LoginInput } from './LoginInput';

export const LoginValid = () => {
  const [loginData, setLoginData] = useState({
    id: '',
    passoword: '',
    username: '',
  });

  const [booleanData, setBooleanData] = useState({
    id: false,
    passoword: false,
    username: false,
  });

  const check = () => {
    if (booleanData.id && booleanData.passoword && booleanData.username) {
      alert('굿');
    } else {
      alert('다시');
    }
  };

  const idValid = loginData.id.length >= 4;
  const pwValid = loginData.passoword.length >= 4;
  const nameValid = loginData.username.length >= 4;

  const dataValid = idValid && pwValid && nameValid;

  console.log(idValid);

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
            setBooleanData={setBooleanData}
            dataValid={dataValid}
          />
        );
      })}
      <button onClick={idValid && check}>로그인</button>
    </div>
  );
};

const INPUT_DATA = [
  { id: 1, type: 'text', name: 'id' },
  { id: 2, type: 'password', name: 'passoword' },
  { id: 3, type: 'text', name: 'username' },
];
