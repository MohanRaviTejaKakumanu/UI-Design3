import React from "react";
import ReactDOM from "react-dom";
import { mainContent } from "../src/utils/mockdata";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
  return (
    <div className="app">
      <Header data={mainContent} />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
