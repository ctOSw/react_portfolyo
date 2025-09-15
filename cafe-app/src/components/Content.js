import React from "react";
import Content1 from "./Content1";
import { Container, Box, Divider } from "@mui/material";
import Content2 from "./Content2";
import MostPopulerContent from "./MostPopulerContetn";
import Content3 from "./Content3";
import MenuContent from "./MenuContent";

function Content() {
  return (
    <Box>
      <Content1 />
      <Content2 />
      <MenuContent />
      <MostPopulerContent />
      <Content3 />
    </Box>
  );
}

export default Content;
