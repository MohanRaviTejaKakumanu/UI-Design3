import ShoppingCard from "./ShoppingCard";
import { content } from "../utils/mockdata";

const Body = () => {
  return (
    <div className="body">
      {content.map((card) => {
        return <ShoppingCard data={card} />;
      })}
    </div>
  );
};

export default Body;
