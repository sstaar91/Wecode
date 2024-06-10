import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Button, Input } from "@_components/Action";
import { Logo } from "@_components/UI";

import { UserInfo } from "@_types/userInfo";
import css from "./Login.module.scss";

const validUserId = "user001";
const validUserPassword = "Qwer!234";

const Login = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({ id: "", password: "" });
  const navigate = useNavigate();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitLoginInfo = () => {
    const { id, password } = userInfo;
    if (id !== validUserId) {
      toast.error("아이디가 일치하지 않습니다.");
      return;
    }
    if (password !== validUserPassword) {
      toast.error("비밀번호가 일치하지 않습니다.");
      return;
    }
    navigate("/main");
    toast.success("환영합니다");
    localStorage.setItem("user", "user001");
  };

  return (
    <main className={css.container}>
      <Logo type="login" />
      <form className={css.loginForm} onSubmit={(e) => e.preventDefault()}>
        <h4 className={css.title}>관리자 페이지</h4>
        <div className={css.inputBox}>
          {USER_INPUT.map((prop) => {
            return <Input key={prop.id} {...prop} value={userInfo[prop.name]} onChangeInput={handleInput} />;
          })}
        </div>
        <Button onClickButton={onSubmitLoginInfo}>로그인</Button>
      </form>
    </main>
  );
};

export default Login;

const USER_INPUT = [
  { id: 1, title: "아이디", titleColor: "gray", name: "id", type: "text", placeholder: "아이디를 입력해주세요" },
  { id: 2, title: "비밀번호", titleColor: "gray", name: "password", type: "password", placeholder: "비밀번호를 입력해주세요" },
];
