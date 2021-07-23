import React from "react";
import Popup from "reactjs-popup";
import Header from "./components/header/header";
import Slider from "./components/slider/slider";
import Footer from "./components/footer/footer";
import Services from "./components/services/services";
import MapSection from "./components/map/map";
import Calculator from "./components/calculator/calculator";
import OfferSend from "./components/offer-send/offer-send";
import {connect} from "react-redux";
import Login from "./components/login/login";
import ReactBody from "react-body";

const App = ({isPopup, login, overflow}) => {
  return (
    <>
      <ReactBody className="inverted" if={overflow} />
      {isPopup && (
        <Popup
          position="right center"
          overlayStyle={{background: `rgba(0, 0, 0, .5)`}}
          contentStyle={{width: `500px`}}
          open={isPopup}
          lockScroll={true}
          closeOnDocumentClick={true}
        >
          {(close) => <OfferSend close={close} />}
        </Popup>
      )}
      {login && (
        <Popup
          position="right center"
          overlayStyle={{background: `rgba(0, 0, 0, .5)`}}
          open={login}
          lockScroll={true}
          closeOnDocumentClick={false}
        >
          {(close) => <Login close={close} />}
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
  login: state.login,
  overflow: state.overflow,
});

export default connect(mapStateToProps)(App);
