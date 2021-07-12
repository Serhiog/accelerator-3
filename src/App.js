import React from "react";
import Header from "./components/header/header";
import Slider from "./components/slider/slider";
import Footer from "./components/footer/footer";
import Services from "./components/services/services";
import MapSection from "./components/map/map";
import Calculator from "./components/calculator/calculator";

const App = () => {
  return (
    <>
      <Header />
      <Slider />
      <Services />
      <Calculator />
      <MapSection />
      <Footer />
    </>
  );
};

export default App;
