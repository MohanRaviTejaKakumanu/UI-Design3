import { HiOutlineMenu } from "react-icons/hi";

const Header = (props) => {
  const { data } = props;
  const { mainTitle } = data;

  return (
    <div className="head">
      <li className="main-title">{mainTitle}</li>
      <li>
        <button className="menu-bar">
          <HiOutlineMenu />
        </button>
      </li>
    </div>
  );
};

export default Header;
