import React from "react";
import Header from "./components/header/header";
import Slider from "./components/slider/slider";
import Footer from "./components/footer/footer";
import Services from "./components/services/services";

const App = () => {
  return (
    <>
      <Header />
      <Slider />
      <Services/>
      <Footer />
    </>
  );
};

export default App;
