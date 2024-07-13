import React from "react";
import ReactDOM from "react-dom";
import content from "../src/utils/mockdata";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
  return (
    <div className="app">
      <Header data={content} />
      <Body data={content} />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
