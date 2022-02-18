import React from 'react';
import { useState } from 'react/cjs/react.development';
import './LoginInput.scss';

export const LoginInput = ({ type, name, setLoginData }) => {
  const [msg, setMsg] = useState(false);

  const changeData = e => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
    e.target.value.length > 6 ? setMsg(true) : setMsg(false);
  };

  return (
    <div>
      <span className="inputTitle">{name}</span>
      <input type={type} name={name} onChange={changeData} />
      {msg ? <span>통과</span> : null}
    </div>
  );
};
