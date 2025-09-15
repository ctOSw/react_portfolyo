import "./App.css";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HoursAndLocation from "./components/HoursAndLocation";
import MenuSection from "./components/MenuSection";
import TestimonialsSection from "./components/TestimonialsSection";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <TestimonialsSection />
      <HoursAndLocation />
      <Footer />
    </div>
  );
}

export default App;
