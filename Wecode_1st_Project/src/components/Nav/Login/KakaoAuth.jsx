import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import kakaoLogin from './kakaoData';

const KakaoAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { search } = location;
  const authCode = search.substring(search.indexOf('=') + 1);
  const { AUTH_TOKEN_URL, TOKEN_QUERY } = kakaoLogin;
  const query = `${TOKEN_QUERY}${authCode}`;

  useEffect(() => {
    if (!authCode) return;
    sendCode();
  }, []);

  const sendCode = () => {
    fetch(`${AUTH_TOKEN_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: query,
    })
      .then(res => res.json())
      .then(res => {
        sessionStorage.setItem('TOKEN', res.access_token);
        navigate('/');
      });
  };

  return <>로그인 중입니다</>;
};

export default KakaoAuth;
