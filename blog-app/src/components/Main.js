import React from "react";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";
import Content4 from "./Content4";
import Divider from "./Divider";

function Main() {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100">
      <Content1 />
      <Divider />
      <Content2 />
      <Divider />
      <Content3 />
      <Divider />
      <Content4 />
    </div>
  );
}

export default Main;
