import logo from "@_assets/images/logo.png";
import css from "./Logo.module.scss";

interface Props {
  type: string;
}

const Logo = ({ type }: Props) => {
  return <img src={logo} alt="logo" className={css[type]} />;
};

export default Logo;
