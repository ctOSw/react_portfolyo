import { Box, Container } from "@mui/material";
import Header from "./components/Header";
import Content from "./components/content";
import Footer from "./components/footer";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const { darkTheme } = useSelector((store) => store.darkTheme);

  return (
    <Box sx={{ backgroundColor: darkTheme ? "#1d5a7bff" : "#fff" }}>
      <Container className="App">
        <Header />
        <Content />
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
