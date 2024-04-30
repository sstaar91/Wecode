import { MouseEvent } from "react";
import { CategoryType } from "@_types/notice";
import css from "./Dropdown.module.scss";

interface Props {
  title: string;
  type: string;
  value: string;
  list: CategoryType[];
  isOpen: boolean;
  handleDropdown: (type: string) => void;
  onClickList: (name: string, value: string) => void;
}

const Dropdown = ({ title, type, value, list, isOpen, handleDropdown, onClickList }: Props) => {
  const showValue = list.filter((el) => el.value === value);

  const prevent = (e: MouseEvent<HTMLElement>, type: string, value: string) => {
    e.stopPropagation();
    onClickList(type, value);
  };

  return (
    <div className={css.container}>
      <span className={css.title}>{title}</span>
      <div className={css.dropdownBox} onClick={() => handleDropdown(type)}>
        <span>{showValue[0]?.title || value}</span>
        {isOpen && (
          <ul className={css.selectBox}>
            {list.map((item) => {
              return (
                <li key={item.id} className={css.selectList} onClick={(e) => prevent(e, type, item.value)}>
                  {item.title}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
