import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import { Container, Box, useMediaQuery, useTheme } from "@mui/material";
import { useSelector } from "react-redux";

function App() {
  const md = useMediaQuery("(max-width : 1020px)");

  const { darkTheme2 } = useSelector((store) => store.theme);

  return (
    <Box
      sx={{ backgroundColor: darkTheme2 ? "#1c1c1cff" : "#DDDAD0" }}
      className="App"
    >
      <Container>
        <Header />
        <Content />
      </Container>
    </Box>
  );
}

export default App;
