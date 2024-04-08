import { useLocation, useNavigate } from "react-router-dom";

import { Logo } from "@_components/UI";
import css from "./Nav.module.scss";

const Nav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  if (pathname === "/") return <></>;

  return (
    <nav className={css.navWrap}>
      <div className={css.nav}>
        <div className={css.logoBox}>
          <Logo type="nav" />
          <h4 className={css.title}>관리자 페이지</h4>
        </div>
        <ul className={css.navList}>
          {MENU_LIST.map((list) => {
            return (
              <li
                key={list.id}
                className={`${css.menu} ${pathname === list.path ? css.select : ""}`}
                onClick={() => {
                  navigate(`${list.path}`);
                }}
              >
                {list.title}
              </li>
            );
          })}
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

const MENU_LIST = [
  { id: 1, title: "홈", path: "/main" },
  { id: 2, title: "채용공고", path: "/notice" },
  { id: 3, title: "공고관리", path: "/manage" },
  { id: 4, title: "어드민", path: "/admin" },
];
