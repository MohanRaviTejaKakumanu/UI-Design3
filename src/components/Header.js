import { GoHeartFill } from "react-icons/go";
import { useState } from "react";

const Header = (props) => {
  const [color, setColor] = useState("gray");
  const { data } = props;
  const { title } = data;

  const triggerColor = () => {
    setColor((x) => (x === "gray" ? "red" : "gray"));
  };

  return (
    <div className="head">
      <li>{title}</li>
      <li onClick={triggerColor}>
        <GoHeartFill color={color} fontSize={25} />
      </li>
    </div>
  );
};

export default Header;
