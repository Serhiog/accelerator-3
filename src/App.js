import React, { Suspense, lazy } from "react";
import Popup from "reactjs-popup";
import Footer from "./components/footer/footer";
import Services from "./components/services/services";
import MapSection from "./components/map/map";
import Calculator from "./components/calculator/calculator";
import OfferSend from "./components/offer-send/offer-send";
import { connect } from "react-redux";
import Login from "./components/login/login";
import ReactBody from "react-body";
import Loader from "./components/loader/loader";

const App = ({ isPopup, login, overflow }) => {
  const LazyComponentHeder = lazy(() => import("./components/header/header"));
  const LazyComponentSlider = lazy(() => import("./components/slider/slider"));

  return (
    <>
      <ReactBody className="inverted" if={overflow} />
      {isPopup && (
        <Popup
          position="right center"
          overlayStyle={{ background: `rgba(0, 0, 0, .5)` }}
          contentStyle={{ width: `500px` }}
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
          overlayStyle={{ background: `rgba(0, 0, 0, .5)` }}
          open={login}
          lockScroll={true}
          closeOnDocumentClick={true}
        >
          {(close) => <Login close={close} />}
        </Popup>
      )}
      <Suspense fallback={<Loader />}>
        <LazyComponentHeder />
        <LazyComponentSlider />
        <Services />
        <Calculator />
        <MapSection />
        <Footer />
      </Suspense>
    </>
  );
};

const mapStateToProps = (state) => ({
  isPopup: state.isPopup,
  login: state.login,
  overflow: state.overflow,
});

export default connect(mapStateToProps)(App);
