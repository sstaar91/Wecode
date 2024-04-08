import { useLocation } from "react-router-dom";

import { Logo } from "@_components/UI";
import css from "./Nav.module.scss";

const Nav = () => {
  const { pathname } = useLocation();

  if (pathname === "/") return <></>;

  return (
    <nav className={css.navWrap}>
      <div className={css.nav}>
        <div className={css.logoBox}>
          <Logo type="nav" />
          <h4 className={css.title}>관리자 페이지</h4>
        </div>
        <ul className={css.navList}>
          <li>홈</li>
          <li>채용공고</li>
          <li>공고관리</li>
          <li>어드민</li>
        </ul>
        <ul className={css.navList}>
          <li>유저이름</li>
          <li>로그아웃</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
