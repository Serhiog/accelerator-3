import ScrollableAnchor from 'react-scrollable-anchor';
import TabsSlider from "../tabs-slider/tabs-slider";
import OnlyTabs from "../only-tabs/only-tabs";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Services = ({ width }) => {

  return (
    <ScrollableAnchor id={`section1`}>
      <section className="services">
        {+width > 1023 && <OnlyTabs />}
        {+width < 1024 && <TabsSlider />}
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
