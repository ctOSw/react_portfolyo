import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #101827, #1A2735)",
      }}
      className="relative  "
    >
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
