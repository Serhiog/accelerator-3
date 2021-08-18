import ScrollableAnchor from 'react-scrollable-anchor';
import TabsSlider from "../tabs-slider/tabs-slider";
import OnlyTabs from "../only-tabs/only-tabs";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import React from "react";

const Services = ({width}) => {
console.log(width);
  return (
    <ScrollableAnchor id={`section1`}>
      <section className="services">
        {+width >= 1366 && <OnlyTabs />}
        {+width < 1366 && <TabsSlider />}
      </section>
    </ScrollableAnchor>
  );
};

Services.propTypes = {
  width: PropTypes.any,
};

const mapStateToProps = (state) => ({
  width: state.width,
});

export default connect(mapStateToProps)(Services);
