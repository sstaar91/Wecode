import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import useGetData from "@_hooks/useGetData";

import PageLayout from "@_components/Layout/PageLayout";
import { SubTitle } from "@_components/UI";
import { Button, Input } from "@_components/Action";

import { INIT_ADMIN_USERINFO } from "@_context/initState";
import { AdminUserType } from "@_types/userInfo";
import css from "./Admin.module.scss";

const Admin = () => {
  const { data, isLoading } = useGetData("/data/userList.json");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [newUserList, setNewUserList] = useState<any[]>([]);
  const [userInfo, setUserInfo] = useState<{ [key: string]: string }>(INIT_ADMIN_USERINFO);

  const onchangeUserInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const onClickAddUser = () => {
    const newList = newUserList;
    newList.push({ ...userInfo, id: newUserList.length + data.length + 1 });
    setNewUserList(newList);
    setUserInfo(INIT_ADMIN_USERINFO);
    toast.success("추가 되었습니다");
  };

  if (isLoading) return <></>;

  return (
    <PageLayout>
      <SubTitle text="계정 관리" />
      <article className={css.container}>
        <form className={css.userInputForm} onSubmit={(e) => e.preventDefault()}>
          {USERINPUT_INFO.map(({ id, title, name }) => {
            return (
              <Input key={id} title={title} type="text" name={name} placeholder={title} value={userInfo[name]} onChangeInput={onchangeUserInfo} />
            );
          })}
          <Button onClickButton={onClickAddUser}>추가</Button>
        </form>
        <ul className={css.listBox}>
          <li className={css.userList}>
            {USERINPUT_INFO.map((list) => {
              return (
                <span key={list.id} className={css.listTitle}>
                  {list.title}
                </span>
              );
            })}
          </li>
          {data.map((list: AdminUserType) => {
            return (
              <li className={css.userList} key={list.id}>
                <span>{list.name}</span>
                <span>{list.email}</span>
                <span>{list.password}</span>
              </li>
            );
          })}
          {newUserList.length > 0 &&
            newUserList.map((list: AdminUserType) => {
              return (
                <li className={css.userList} key={list.id}>
                  <span>{list.name}</span>
                  <span>{list.email}</span>
                  <span>{list.password}</span>
                </li>
              );
            })}
        </ul>
      </article>
    </PageLayout>
  );
};

export default Admin;

const USERINPUT_INFO = [
  { id: 1, title: "이름", name: "name" },
  { id: 2, title: "이메일", name: "email" },
  { id: 3, title: "비밀번호", name: "password" },
];
