import React from 'react';

export const LoginInput = ({
  type,
  name,
  setLoginData,
  setBooleanData,
  dataValid,
}) => {
  const changeData = e => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));

    // if (e.target.value.length > 6) {
    //   setBooleanData(prev => ({ ...prev, [name]: true }));
    // } else {
    //   setBooleanData(prev => ({ ...prev, [name]: false }));
    // }
  };

  return (
    <div>
      <input type={type} name={name} onChange={changeData} />
      {dataValid ? <span>통과</span> : null}
    </div>
  );
};
