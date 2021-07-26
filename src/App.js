import React, { Suspense, lazy } from "react";
import Popup from "reactjs-popup";
import Footer from "./components/footer/footer";
import Services from "./components/services/services";
import Calculator from "./components/calculator/calculator";
import OfferSend from "./components/offer-send/offer-send";
import { connect } from "react-redux";
import Login from "./components/login/login";
import ReactBody from "react-body";
import Loader from "./components/loader/loader";
import Header from "./components/header/header";

const App = ({ isPopup, login, overflow }) => {
  const LazyComponentSlider = lazy(() => import("./components/slider/slider"));
  const LazyComponentMap = lazy(() => import("./components/map/map"));

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

      <Header />
      <Suspense fallback={<Loader />}>
        <LazyComponentSlider />
      </Suspense>
      <Services />
      <Calculator />
      <Suspense fallback={<Loader />}>
        <LazyComponentMap />
      </Suspense>
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
