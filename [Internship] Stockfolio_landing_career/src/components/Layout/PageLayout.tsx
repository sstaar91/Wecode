import { ReactNode } from "react";
import css from "./PageLayout.module.scss";

interface Props {
  children: ReactNode;
}

const PageLayout = ({ children }: Props) => {
  return <main className={css.container}>{children}</main>;
};

export default PageLayout;
