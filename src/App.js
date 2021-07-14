import React from "react";
import Popup from "reactjs-popup";
import Header from "./components/header/header";
import Slider from "./components/slider/slider";
import Footer from "./components/footer/footer";
import Services from "./components/services/services";
import MapSection from "./components/map/map";
import Calculator from "./components/calculator/calculator";
import { connect } from "react-redux";

const App = ({ isPopup }) => {

  return (
    <>
      {isPopup && (
        <Popup
          trigger={<button> Trigger</button>}
          position="center center"
          overlayStyle={{ background: "rgba(0, 0, 0, .5)" }}
          contentStyle={{ width: "500px" }}
          open={isPopup}
          lockScroll={true}
        >
          <OfferSend />
        </Popup>
      )}

      <Header />
      <Slider />
      <Services />
      <Calculator />
      <MapSection />
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  isPopup: state.isPopup,
});

export default connect(mapStateToProps)(App);
