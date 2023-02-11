import Logo from "../../assets/MeTube.png";
import Styles from "./header.module.css";
import {
  RiAccountCircleLine,
  RiSearchLine,
  RiMenuFoldFill,
} from "react-icons/ri";

export default function Header() {
  return (
    <>
      <div className={Styles.navbar}>
        <div className={Styles.siteName}>
          <RiMenuFoldFill />
          <img className={Styles.logo} src={Logo} alt="MeTube Logo" />
        </div>
        <div className={Styles.search}>
          <input type="text" name="searchbar" placeholder="Search" />
          <button type="submit">
            <RiSearchLine />
          </button>
        </div>
        <button type="button" className="signInBtn">
          <RiAccountCircleLine /> Sign In
        </button>
      </div>
    </>
  );
}
