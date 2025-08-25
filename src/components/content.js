import { Divider, Stack } from "@mui/material";
import React from "react";
import Content1 from "./content1";
import Content2 from "./content2";
import "./content.css";
import Content3 from "./content3";
import { useSelector } from "react-redux";

function Content() {
  const { darkTheme } = useSelector((store) => store.darkTheme);

  return (
    <Stack gap={4} id="MuiStack-content-root" sx={{ paddingTop: "8em" }}>
      <Content1 />
      <Divider
        style={{
          backgroundColor: darkTheme ? "#fff" : "#685da9ff",
          height: "2px",
        }}
      />
      <Content2 />
      <Divider
        style={{
          backgroundColor: darkTheme ? "#fff" : "#685da9ff",
          height: "2px",
        }}
      />
      <Content3 />
    </Stack>
  );
}

export default Content;
