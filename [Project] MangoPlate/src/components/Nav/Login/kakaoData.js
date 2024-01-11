const AUTH_CODE_URL = 'https://kauth.kakao.com/oauth/authorize?';
const AUTH_TOKEN_URL = 'https://kauth.kakao.com/oauth/token?';
const CLIENT_ID = `client_id=${process.env.REACT_APP_KAKAO_KEY}`;
const REDIRECT_URI = 'redirect_uri=http://localhost:3000/auth/kakao';
const RESPONSE_TYPE = 'response_type=code';
const GRANT_TYPE = 'grant_type=authorization_code';

const KAKAO_URL = `${AUTH_CODE_URL}${CLIENT_ID}&${REDIRECT_URI}&${RESPONSE_TYPE}`;
const TOKEN_QUERY = `${GRANT_TYPE}&${CLIENT_ID}&${REDIRECT_URI}&code=`;

const kakaoLogin = {
  KAKAO_URL,
  TOKEN_QUERY,
  AUTH_TOKEN_URL,
};

export default kakaoLogin;
