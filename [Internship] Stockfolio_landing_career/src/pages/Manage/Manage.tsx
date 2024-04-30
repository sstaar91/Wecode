import { ChangeEvent, useState } from "react";
import moment from "moment";

import PageLayout from "@_components/Layout/PageLayout";
import { SubTitle } from "@_components/UI";
import { Dropdown, Input } from "@_components/Action";

import { CATEGORY_LIST, NOTICE_TYPE_LIST, POSITION_LIST } from "@_constants/notice";
import { CategoryType } from "@_types/notice";
import css from "./Manage.module.scss";

const Manage = () => {
  const [curOpenDropdown, setCurOpenDropdown] = useState("");
  const [noticeInfo, setNoticeInfo] = useState<{ [key: string]: string }>({
    noticeTitle: "",
    position: "",
    noticeType: "",
    deadLine: "",
    category: "",
  });

  const onChangeNoticeInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNoticeInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleDropdown = (type: string) => {
    setCurOpenDropdown(type);
  };

  const onClickList = (name: string, value: string) => {
    setNoticeInfo((prev) => ({ ...prev, [name]: value }));
    setCurOpenDropdown("");
  };

  const { noticeTitle } = noticeInfo;

  const dropdownList: { [key: string]: CategoryType[] } = {
    noticeType: CATEGORY_LIST.filter((el) => el.id !== 1),
    position: POSITION_LIST,
    category: NOTICE_TYPE_LIST,
  };

  return (
    <PageLayout>
      <SubTitle text="새로운 공고 올리기" />
      <div className={css.infoBox}>
        <Input
          title="이름"
          type="text"
          name="noticeTitle"
          placeholder="공고 제목을 작성해주세요"
          value={noticeTitle}
          onChangeInput={onChangeNoticeInfo}
        />
        <div className={css.dropdownBox}>
          {NOTICE_CATEGORY.map(({ id, title, type, status }) => {
            if (status === "input") {
              return (
                <Input
                  key={id}
                  title={title}
                  type="date"
                  name={type}
                  placeholder=""
                  value={noticeInfo[type] || moment(new Date()).format("YYYY-MM-DD")}
                  onChangeInput={onChangeNoticeInfo}
                />
              );
            } else {
              return (
                <Dropdown
                  key={id}
                  title={title}
                  type={type}
                  value={noticeInfo[type] || title}
                  list={dropdownList[type]}
                  isOpen={curOpenDropdown === type}
                  handleDropdown={handleDropdown}
                  onClickList={onClickList}
                />
              );
            }
          })}
        </div>
      </div>
    </PageLayout>
  );
};

export default Manage;

const NOTICE_CATEGORY = [
  { id: 1, title: "경력", type: "noticeType", status: "dropdown" },
  { id: 2, title: "형태", type: "position", status: "dropdown" },
  { id: 3, title: "마감일", type: "deadLine", status: "input" },
  { id: 4, title: "직종", type: "category", status: "dropdown" },
];
