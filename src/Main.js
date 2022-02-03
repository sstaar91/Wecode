import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Main = () => {
  const navigate = useNavigate();

  const goToPage = e => {
    navigate(`/${e.target.name}`);
  };

  return (
    <div>
      <button name="first" onClick={goToPage}>
        1차
      </button>
      <button name="second" onClick={goToPage}>
        2차
      </button>
    </div>
  );
};
