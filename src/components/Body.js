import { ImCart } from "react-icons/im";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const Body = (props) => {
  const { data } = props;
  const { itemname, address, color, size, weight, price, discountprice } = data;
  const [colour, setColour] = useState("gray");

  const triggerColor = () => {
    setColour((x) => (x === "gray" ? "blue" : "gray"));
  };

  return (
    <div className="body">
      <div className="image-container">
        <img
          className="image"
          src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQUOZIlgiWOjXyhXAZ0AeRFLl7brJLN8fatWDOct4BReG635mUgFIBMN8uS1SaDmmw9iNVObSRqdX1Z1UxApzJ8ryUvehUvfHTeft-tEQU0mhTJp7ytAEf_rv8"
          alt="IMAGE NOT FOUND"
          class="img-fluid"
        ></img>
      </div>
      <div className="info">
        <div className="name">{itemname}</div>
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
          <div className="cart" onClick={triggerColor}>
            <ImCart color={colour} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
