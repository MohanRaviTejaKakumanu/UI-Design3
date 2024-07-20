import { ImCart } from "react-icons/im";
import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoHeartFill } from "react-icons/go";

const ShoppingCard = (props) => {
  const { data } = props;
  const {
    title,
    itemname,
    address,
    color,
    size,
    weight,
    price,
    discountprice,
    img,
  } = data;
  const [colour, setColour] = useState("gray");
  const [heartColour, setHeartColour] = useState("gray");

  const triggerColor1 = () => {
    setColour((x) => (x === "gray" ? "blue" : "gray"));
  };

  const triggerColor2 = () => {
    setHeartColour((x) => (x === "gray" ? "red" : "gray"));
  };

  return (
    <div className="card">
      <div className="title">{title}</div>
      <div className="image-container">
        <img
          className="image"
          src={img + CDN_URL}
          alt="IMAGE NOT FOUND"
          class="img-fluid"
        ></img>
      </div>
      <div className="info">
        <div className="first_line">
          <li className="name">{itemname}</li>
          <li onClick={triggerColor2}>
            <GoHeartFill color={heartColour} fontSize={25} />
          </li>
        </div>
        <div className="address">{address}</div>
        <div className="p">
          <div className="p1">
            <div>color</div>
            <div>size</div>
            <div>weight</div>
          </div>
          <div className="p2">
            <div className="color">{color}</div>
            <div className="size">{size}</div>
            <div className="weight">{weight}</div>
          </div>
        </div>

        <div className="p3">
          <div>
            <div className="price">{price}</div>
            <div className=" discountprice">{discountprice}</div>
          </div>
          <div className="cart" onClick={triggerColor1}>
            <ImCart color={colour} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
