import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";

import { Button, Input } from "@_components/Action";
import { Logo } from "@_components/UI";

import { UserInfo } from "@_types/userInfo";
import css from "./Login.module.scss";

const Login = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({ id: "", password: "" });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className={css.container}>
      <Logo type="login" />
      <div className={css.loginBox}>
        <h4 className={css.title}>관리자 페이지</h4>
        <form className={css.inputForm}>
          {USER_INPUT.map((prop) => {
            return <Input key={prop.id} {...prop} value={userInfo[prop.name]} onChangeInput={handleInput} />;
          })}
        </form>
      </div>
      <Button
        onClickButton={() => {
          toast.error("에러");
        }}
      >
        로그인
      </Button>
    </main>
  );
};

export default Login;

const USER_INPUT = [
  { id: 1, title: "아이디", name: "id", type: "text", placeholder: "아이디를 입력해주세요" },
  { id: 2, title: "비밀번호", name: "password", type: "password", placeholder: "비밀번호를 입력해주세요" },
];
