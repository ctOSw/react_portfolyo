import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Foter";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className=" bg-gradient-to-b from-[#F6F1F1] to-[#fff]">
      <Header />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
